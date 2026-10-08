import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterLogo from "../assets/FooterLogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative text-white overflow-hidden bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] ">
      {/* Footer Content */}
      <div className="top-0  py-5 border-t border-white/40 max-w-6xl mx-auto"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex lg:flex-row flex-col justify-evenly gap-10 mt-15 ">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center text-center">
          <img src={FooterLogo} alt="FooterLogo" className="w-24 mb-4" />
          <p className="text-base sm:text-lg font-semibold leading-relaxed">
            It's Time To Pull In A <br />
            <span className="text-sky-400">Professional</span>
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-3 text-sky-400">Menu</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-white transition">
                Career
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition">Blogs</Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-white transition">Admin</Link>
            </li>

          </ul>
        </div>

        {/* Industries We Cater */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-3 text-sky-400 text-nowrap">Industries We Cater</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li>
              <Link to="/lawyer" className="hover:text-white transition">
                Lawyers
              </Link>
            </li>
            <li>
              <Link to="/plumber" className="hover:text-white transition">
                Plumbers
              </Link>
            </li>
            <li>
              <Link to="/roofer" className="hover:text-white transition">
                Roofers
              </Link>
            </li>
            <li>
              <Link to="/dental" className="hover:text-white transition">
                Dental
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-3 text-sky-400">Connect Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li>
              <a
                href="mailto:marketing@growthshark.io"
                className="hover:text-white transition"
              >
                marketing@growthshark.io
              </a>
            </li>
            <li>
              <a
                href="mailto:diptesh@growthshark.io"
                className="hover:text-white transition"
              >
                diptesh@growthshark.io
              </a>
            </li>
            <li>
              <a
                href="tel:+918348296083"
                className="hover:text-white transition"
              >
                +91 83482 96083
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-sky-300 text-xl">
            <a
              href="https://www.facebook.com/growthshark"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/growthshark.io"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/growth-shark"
              className="hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="relative z-10 text-center text-sm text-gray-400 pb-6 px-6 max-w-6xl mx-auto mt-10">
        © {currentYear} Growth Shark. All Rights Reserved.
      </div>

    </footer>
  );
}
