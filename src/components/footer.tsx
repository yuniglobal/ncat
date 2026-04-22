import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-black text-white pt-16 pb-8 px-4 border-t border-[#f0abfc]/20">
      <div className="max-w-7xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#f0abfc] to-[#e879f9] bg-clip-text text-transparent">
              NCAT
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              National Conference Of Applied Technology. We craft innovative digital experiences that push boundaries and inspire change.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-[#f0abfc] transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f0abfc] transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f0abfc] transition-colors" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f0abfc] transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f0abfc]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#Hero" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f0abfc]">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-[#f0abfc] mt-0.5" />
                <a href="mailto:hi@ncat.com" className="text-gray-300 hover:text-white transition-colors">hi@ncat.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#f0abfc] mt-0.5" />
                <span className="text-gray-300">+92 51 234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#f0abfc] mt-0.5" />
                <span className="text-gray-300">Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          
        </div>

        {/* Copyright line */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} NCAT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;