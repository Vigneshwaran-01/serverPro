import React from "react";
import "../index.css";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiSendPlaneLine,
} from "react-icons/ri";

const ContactForm: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl py-8 px-6 bg-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto rounded-lg ">
        <div className="my-4">
          <div>
            <h2 className="text-xl font-semibold">Get in Touch</h2>
          </div>
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-4">
              <RiPhoneLine size={25} className="text-blue-500" />
              <h3 className="text-lg"> +1(555) 123-4567</h3>
            </div>
            <div className="flex items-center gap-4">
              <RiMailLine size={25} className="text-blue-500" />
              <h3 className="text-lg"> support@serverpro.com</h3>
            </div>
            <div className="flex items-center gap-4">
              <RiMapPinLine size={25} className="text-blue-500" />
              <h3 className="text-lg">123 server street,cloud city,12345</h3>
            </div>
          </div>
        </div>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            className="rounded-lg bg-gray-600 py-2 px-4 outline-none"
            placeholder="enter Name "
          />
          <input
            type="email"
            name=""
            id=""
            className="rounded-lg bg-gray-600 py-2 px-4 outline-none"
            placeholder="enter email "
          />
          <textarea
            name=""
            id=""
            className="rounded-lg bg-gray-600 py-2 px-4 outline-none"
            placeholder="enter message "
          ></textarea>
          <button className="w-full bg-blue-500 flex items-center text-lg justify-center gap-4 py-2 px-4 rounded-lg font-semibold">
            <h3>send message</h3>
            <RiSendPlaneLine />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
