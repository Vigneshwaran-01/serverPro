import React from "react";
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiServerLine, RiTwitterLine } from "react-icons/ri";

const Footer :React.FC=()=>{
  return (
    <footer className="bg-gray-800 text-white mt-4">
  {/* Top Section */}

  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 px-6">
    {/* Brand Section */}
    <div>
      <div className="flex items-center space-x-3 mb-4">
        <RiServerLine className="text-blue-500 text-3xl" />
        <h3 className="text-xl font-semibold">ServerPro</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
       Empowering busssiness with high-performance dedicated server solutions.</p>
    </div>

    {/* Solutions Section */}
    <div>
      <h2 className="text-lg font-semibold mb-3">Solutions</h2>
      <ul className="space-y-2 text-gray-400">
        <li>
          <a href="#" className="hover:text-blue-500">Dedicated Servers</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Cloud Hosting</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Managed Services</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Security Solutions</a>
        </li>
      </ul>
    </div>

    {/* Company Section */}
    <div>
      <h2 className="text-lg font-semibold mb-3">Company</h2>
      <ul className="space-y-2 text-gray-400">
        <li>
          <a href="#" className="hover:text-blue-500">About Us</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Careers</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Blog</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </li>
      </ul>
    </div>

    {/* Connect Section */}
    <div>
      <h2 className="text-lg font-semibold mb-3">Connect</h2>
      <div className="flex space-x-4 text-gray-400">
        <a href="#" className="hover:text-blue-500">
          <RiInstagramLine className="text-2xl" />
        </a>
        <a href="#" className="hover:text-blue-500">
          <RiFacebookLine className="text-2xl" />
        </a>
        <a href="#" className="hover:text-blue-500">
          <RiTwitterLine className="text-2xl" />
        </a>
        <a href="#" className="hover:text-blue-500">
          <RiLinkedinLine className="text-2xl" />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
    <div>&copy; 2024 ServerPro. All rights reserved.</div>
    <div className="flex space-x-4 mt-3 md:mt-0">
      <a href="#" className="hover:text-blue-500">Privacy Policy</a>
      <a href="#" className="hover:text-blue-500">Terms of Service</a>
      <a href="#" className="hover:text-blue-500">Cookie Policy</a>
    </div>
  </div>
</footer>

  )
}

export default Footer;