import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            Welcome to our tech website, where we provide the latest in technology, coding tutorials, and financial insights. Stay updated with the latest trends and learn new skills with us.
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Address: 123 Tech Street, City, Country</li>
            <li>Email: info@techsite.com</li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-gray-300 text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-gray-300 text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-gray-300 text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-gray-300 text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-500">
        <p>&copy; 2024 TechSite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
