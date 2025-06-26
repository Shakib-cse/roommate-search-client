import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Footer = () => {
  return (
    <footer className="bg-base-300 py-10 px-6">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Logo & Brand */}
        <div className="flex flex-col items-center justify-center md:items-start gap-3">
          <Link to='/' className="flex items-center gap-2">
            <img src="/logo.png" alt="Roommate Logo" className="w-10 rounded-md" />
            <span className="text-xl font-bold hidden md:inline">
              <Typewriter
                words={["Roommate Search"]}
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={20000}
              />
            </span>
          </Link>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="mb-1">
            📧 Email: <a href="mailto:Shakibcse333@gmail.com" className="text-info hover:underline">Shakibcse333@gmail.com</a>
          </p>
          <p className="mb-1">
            📞 Phone: <a href="tel:+8801775584107" className="text-info hover:underline">+8801775584107</a>
          </p>
          <p>📍 Address: Mymensingh, Bangladesh</p>
        </div>

        {/* Legal Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-1">
            <li><Link to="/termsandconditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacypolicy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl justify-center md:justify-start">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-600"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Roommate Search. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
