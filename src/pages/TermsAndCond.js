// src/components/TermsOfService.js
import React from 'react';
import Pagination from '../components/Pagination';

const TermsAndCond = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
      <p className="text-gray-600 mb-4">
        Welcome to NexusEx. These Terms of Service ("Terms") govern your use of our website and services ("Services"). By using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Services.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Use of Services</h2>
      <p className="text-gray-600 mb-4">
        You must be at least 13 years old to use our Services. You agree to use our Services only for lawful purposes and in accordance with these Terms.
      </p>
      <p className="text-gray-600 mb-4">
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Prohibited Activities</h2>
      <p className="text-gray-600 mb-4">
        You agree not to engage in any of the following prohibited activities:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>Violating any applicable laws or regulations</li>
        <li>Infringing on the rights of others</li>
        <li>Posting or transmitting any fraudulent, misleading, or deceptive content</li>
        <li>Interfering with the operation of our Services</li>
        <li>Using our Services to distribute spam or other unsolicited messages</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Termination</h2>
      <p className="text-gray-600 mb-4">
        We reserve the right to terminate or suspend your access to our Services at any time, without notice, for any reason, including if you violate these Terms.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Disclaimer of Warranties</h2>
      <p className="text-gray-600 mb-4">
        Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Limitation of Liability</h2>
      <p className="text-gray-600 mb-4">
        In no event shall NexusEx, its affiliates, or their respective officers, directors, employees, or agents be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our Services.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Governing Law</h2>
      <p className="text-gray-600 mb-4">
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which NexusEx is headquartered, without regard to its conflict of law principles.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Changes to These Terms</h2>
      <p className="text-gray-600 mb-4">
        We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website. You are advised to review these Terms periodically for any changes.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-4">
        If you have any questions about these Terms, please contact us at support@NexusEx.com.
      </p>
      <Pagination prevLink="/terms-of-service" nextLink="#" />
    </div>
  );
};

export default TermsAndCond;
