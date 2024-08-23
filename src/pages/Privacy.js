// src/components/PrivacyPolicy.js
import React from 'react';
import Pagination from '../components/Pagination';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">
        At NexusEx, we are committed to protecting your privacy. This Privacy Policy outlines the types of information we collect from our users and how we use, disclose, and safeguard that information.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
      <p className="text-gray-600 mb-4">
        We collect information you provide directly to us, such as when you create an account, update your profile, use the chat features, or contact support. This information may include your name, email address, phone number, profile picture, and any other information you choose to provide.
      </p>
      <p className="text-gray-600 mb-4">
        We also collect information automatically as you use our service. This may include your IP address, device information, usage data, and cookies.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How We Use Information</h2>
      <p className="text-gray-600 mb-4">
        We use the information we collect to:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Provide and improve our services</li>
        <li>Communicate with you</li>
        <li>Personalize your experience</li>
        <li>Ensure the security of our services</li>
        <li>Comply with legal obligations</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Sharing of Information</h2>
      <p className="text-gray-600 mb-4">
        We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Service providers who help us operate our services</li>
        <li>Law enforcement or regulatory authorities if required by law</li>
        <li>Other users of NexusEx to facilitate communication and interaction</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Security</h2>
      <p className="text-gray-600 mb-4">
        We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of your information.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Changes to This Policy</h2>
      <p className="text-gray-600 mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. You are advised to review this policy periodically for any changes.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-4">
        If you have any questions about this Privacy Policy, please contact us at privacy@NexusEx.com.
      </p>
      <Pagination prevLink="/terms-of-service" nextLink="#" />
    </div>
  );
};

export default Privacy;
