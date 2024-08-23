import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import ChatPage from './pages/ChatPage';
import ComingSoon from './pages/ComingSoon';
import Privacy from './pages/Privacy';
import TermsAndCond from './pages/TermsAndCond';
import Animator from './components/Animator';
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Animator />} />
        <Route path="/home" element={<Header />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/chatpage' element={<ChatPage />} />
        <Route path='/comingsoon' element={<ComingSoon />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCond />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
