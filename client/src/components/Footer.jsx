import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="https://github.com/Tanmoy9088"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tanmoy9088"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/Tanmoy105Das"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:tanmoyd9088@gmail.com"
            className="hover:text-yellow-400 transition"
          >
            <MdEmail />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tanmoy9088. Built with ❤️ using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
