import React from 'react';

export default function Footer({ className = '' }) {
  return (
    <footer className={`relative overflow-hidden ${className}`}>
      {/* Main Footer Container */}
      <div className="bg-[#FF6B6B] rounded-3xl mx-5 m-5">
        {/* Top Section with Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* Left Side - Logo and Description */}
          <div className="max-w-md ml-5 mt-5 mb-8 md:mb-0">
            <img src="/images/edaptify.svg" alt="Edaptify" width={300} />
            <p className="text-white/90 text-lg leading-relaxed font-bold italic mb-6">
              Empowering learners worldwide with high-quality, accessible online
              education. Join thousands of students on their journey to success.
            </p>
            <a
              href="/about"
              className="text-white underline hover:text-white/80 transition-colors text-lg font-extrabold"
            >
              About Us
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full m-0">
          <img
            src="/images/logostroked.svg"
            alt="Edaptify"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-5 px-5 font-bold">
          {/* Left Side - Contact Links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            <a
              href="/contact"
              className="text-white hover:text-white/80 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className="text-white hover:text-white/80 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className="text-white hover:text-white/80 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Center - Copyright */}
          <div className="text-white mb-4 md:mb-0">© 2025 Edaptify</div>

          {/* Right Side - Social Links */}
          <div className="flex gap-6">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              Youtube
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
