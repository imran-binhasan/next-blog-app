import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Logo or Brand */}
        <div className="text-lg font-medium">Next Blog</div>

        {/* Center Section: Navigation Links */}
        <div className="text-center text-sm text-gray-400 mt-2">
        &copy; {new Date().getFullYear()} Your Blog. All rights reserved.
      </div>
        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram size={20} /></a>
        </div>
      </div>

      {/* Bottom Copyright Text */}
     
    </footer>
  );
}
