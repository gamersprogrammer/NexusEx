// src/chat.js

import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

// Send a message
export const sendMessage = async (chatId, senderId, message) => {
  try {
    await addDoc(collection(db, "chats", chatId, "messages"), {
      senderId,
      message,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error sending message:", error.message);
  }
};

// Fetch messages in real time
export const fetchMessages = (chatId, callback) => {
  const q = query(
    collection(db, "chats", chatId, "messages"),
    orderBy("timestamp", "asc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => doc.data());
    callback(messages);
  });

  return unsubscribe; // Call this function to stop listening to real-time updates
};
