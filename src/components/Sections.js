import React from 'react';

const images = [
  {
    src: '/images/NexusEx.jpg',
    alt: 'Example of Nexus chat',
    title: 'Seamless Communication',
    description: 'Stay connected with friends and family through real-time messaging, voice, and video calls.',
  },
  {
    src: '/images/NexusEX pic.jpg',
    alt: 'Nexus chat features',
    title: 'Advanced Features',
    description: 'Explore features like group chats, file sharing, custom emojis, and end-to-end encryption.',
  },
  {
    src: '/images/usage.jpg',
    alt: 'Usage example of Nexus chat',
    title: 'User-Friendly Interface',
    description: 'Enjoy a sleek and intuitive interface that makes chatting easy and enjoyable.',
  },
  {
    src: '/images/first.webp',
    alt: 'Nexus app usage',
    title: 'Reliable Performance',
    description: 'Experience reliable performance and fast connectivity, no matter where you are.',
  },
];

const faqs = [
  {
    question: 'How do I sign up for Nexus?',
    answer: 'Signing up for Nexus is easy! Just click the "Sign Up" button on the homepage and follow the instructions.',
  },
  {
    question: 'Is Nexus free to use?',
    answer: 'Yes, Nexus offers a free plan with all basic features. We also have Pro and Enterprise plans for advanced features.',
  },
  {
    question: 'Can I use Nexus on my mobile device?',
    answer: 'Absolutely! Nexus is designed to work seamlessly on both desktop and mobile devices.',
  },
  {
    question: 'How secure is Nexus?',
    answer: 'Nexus uses end-to-end encryption to ensure that your conversations are secure and private.',
  },
  {
    question: 'What features are included in the Pro plan?',
    answer: 'The Pro plan includes additional features such as higher quality video calls, more storage for file sharing, and access to exclusive custom emojis.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact our support team through the "Contact" page on our website. We are here to help!',
  },
];

function Sections() {
  return (
<>
      {/* Intro Banner Section */}
      <section className="bg-blue-500 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            <img src="/images/NexusEx.jpg" alt="NexusEx Intro" className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center p-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to NexusEx</h1>
                <p className="text-xl mb-6">The ultimate solution for seamless communication and collaboration.</p>
                <a href="#features" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Features</h2>
          <div className="flex flex-wrap justify-center">
            {['Real-Time Messaging', 'Voice & Video Calls', 'Group Chats', 'File Sharing', 'Custom Emojis', 'End-to-End Encryption'].map((feature, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature}</h3>
                  <p className="text-gray-600">Description for {feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Features with Images</h2>
          <div className="flex flex-wrap justify-center">
            {images.map((image, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">{image.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Pricing</h2>
          <div className="flex flex-wrap justify-center">
            {['Free', 'Pro', 'Enterprise'].map((plan, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{plan}</h3>
                  <p className="text-gray-600 mb-4">Description for {plan} plan.</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {plan === 'Free' ? '$0/month' : plan === 'Pro' ? '$4.99/month' : 'Contact Us'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-wrap justify-center">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Sections;
