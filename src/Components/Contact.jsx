import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="bg-base-300 shadow-xl rounded-2xl p-8 max-w-xl w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-2">📧 Email: <span className="font-medium">support@roommatesearch.com</span></p>
        <p className="text-lg mb-2">📞 Phone: <span className="font-medium">+880 1234 567 890</span></p>
        <p className="text-lg mb-2">🌐 Website: <a href="https://roommatesearch.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">roommatesearch.com</a></p>
        <p className="text-lg mt-4">📍 Address: Dhanmondi, Dhaka, Bangladesh</p>
      </div>
    </div>
  );
};

export default Contact;
