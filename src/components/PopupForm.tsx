import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

interface PopupFormProps {
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 py-6 px-8 rounded-lg space-y-4 text-white max-w-md relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <RiCloseLine className="text-2xl" />
        </button>

        {/* Popup Header */}
        <div className="space-y-2">
          <h2 className="text-xl font-medium">Request a Demo</h2>
          <p className="text-sm text-gray-300">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Company Name"
            className="outline-none w-full rounded-lg bg-gray-600 py-2 px-4"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="outline-none w-full rounded-lg bg-gray-600 py-2 px-4"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="outline-none w-full rounded-lg bg-gray-600 py-2 px-4"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="outline-none w-full rounded-lg bg-gray-600 py-2 px-4"
          />
          <button
            onClick={onClose}
            className="w-full rounded-lg bg-blue-500 text-white hover:bg-blue-600 py-2 px-4"
          >
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
