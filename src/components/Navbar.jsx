import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar({ toggleMode, isStealth }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const dropdownRef = useRef(null);

  // Custom hook to ensure state updates are properly handled
  const useLoggedState = (initialValue, name) => {
    const [state, setState] = useState(initialValue);

    const loggedSetState = useCallback((value) => {
      console.log(`Setting ${name} to:`, value);
      setState(value);
    }, [name]);

    return [state, loggedSetState];
  };

  // Use custom hook for all states - MUST be declared before any useEffect that uses them
  const [isOpen, setIsOpen] = useLoggedState(false, 'Mobile Menu Open');
  const [isServicesOpen, setIsServicesOpen] = useLoggedState(false, 'Desktop Services Open');
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useLoggedState(false, 'Mobile Services Open');
  const [isSocialMediaSubMenuOpen, setIsSocialMediaSubMenuOpen] = useLoggedState(false, 'Social Media Submenu Open');

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "" },
    { name: "Career", link: "/career" },
    { name: "About Us", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact Us", link: "/contact" },
    { name: "Blogs", link: "/blog" },
  ];

  // Main services excluding social media marketing services
  const mainServices = [
    // { name: "Automation & Personalization", link: "/services/automation" },
    { name: "B2B SEO", link: "/services/b2b-seo-service" },
    { name: "Blog Writing", link: "/services/blog-writing-service" },
    // { name: "Community Engagement", link: "/services/community-engagement" },
    { name: "Community Management", link: "/services/community-management" },
    { name: "Copywriting", link: "/services/copywriting-services" },
    { name: "E-commerce SEO", link: "/services/ecommerce-seo-services" },
    // { name: "Email Campaigns", link: "/services/email-campaign" },
    { name: "Email Marketing", link: "/services/email-marketing-services" },
    // { name: "Feedback & Review Management", link: "/services/feedback" },
    // { name: "Online Engagement", link: "/services/online-engagement" },
    { name: "Video Content", link: "/services/video-editing-service" },
  ];

  // Social Media Marketing services
  const socialMediaServices = [
    { name: "Facebook Marketing", link: "/services/facebook-marketing" },
    { name: "Instagram Marketing", link: "/services/insta-marketing" },
    { name: "Social Listening & Monitoring", link: "/services/social-listening" },
    { name: "Content Creation & Scheduling", link: "/services/content-creation-services" },
  ];

  const services = [...mainServices, ...socialMediaServices];

  const portfolioPaths = [
    "/portfolio/smm1",
    "/portfolio/smm2",
    "/portfolio/pms",
    "/portfolio/ocs",
    "/portfolio/cb2b",
  ];

  const redirectPaths = [
    ...portfolioPaths,
    "/career",
    "/about",
    "/portfolio",
    "/contact",
    ...services.map((s) => s.link),
  ];

  const handleToggleMode = () => {
    console.log("Current Path:", location.pathname);
    console.log("Current isStealth:", isStealth);

    // Special handling for campaign pages
    const campaignPaths = ["/lawyer", "/plumber", "/roofer", "/dental"];
    if (campaignPaths.includes(location.pathname)) {
      // Navigate directly to the appropriate home page variant
      // and ensure mode is toggled via toggleMode if required
      toggleMode();
      navigate("/");
      return;
    }

    // Toggle the mode for other pages
    toggleMode();

    // Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Normalize pathname (remove trailing slash)
    const currentPath = location.pathname.toLowerCase().replace(/\/$/, "");

    // Add blog paths to redirect list
    const isBlogPage = currentPath === "/blog" || currentPath.startsWith("/blog/");

    if (redirectPaths.includes(currentPath) || isBlogPage) {
      console.log("Redirecting to home: /");
      navigate("/");
    };
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        // Only close social media submenu for desktop, not mobile
        if (window.innerWidth >= 768) { // md breakpoint
          setIsSocialMediaSubMenuOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add effect to handle mobile menu closing
  useEffect(() => {
    // If mobile menu is closed, ensure submenus are also closed
    if (!isOpen) {
      setIsMobileServicesOpen(false);
      // Don't close social media submenu here as it might cause the issue
      // setIsSocialMediaSubMenuOpen(false);
    }
  }, [isOpen]);

  // Reusable underline
  const Underline = ({ link }) => (
    <motion.div
      initial={{ width: 0 }}
      animate={
        hovered === link || location.pathname === link
          ? { width: "100%" }
          : { width: 0 }
      }
      transition={{ duration: 0.3 }}
      className={`absolute left-0 -bottom-1 h-0.5 ${location.pathname === link ? "bg-lime-400" : "bg-white"
        }`}
    />
  );

  // Detect if any service page is active
  const isServicePage = services.some((s) => s.link === location.pathname);

  // Check if any social media service is active
  const isSocialMediaServiceActive = socialMediaServices.some((s) => s.link === location.pathname);

  // Add effect to log state changes for debugging
  useEffect(() => {
    console.log('Mobile Menu Open:', isOpen);
    console.log('Mobile Services Open:', isMobileServicesOpen);
    console.log('Social Media Submenu Open:', isSocialMediaSubMenuOpen);
  }, [isOpen, isMobileServicesOpen, isSocialMediaSubMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto mt-4 px-6 py-1 rounded-full bg-[#71b5f0] text-black shadow-xl flex items-center justify-between">
        <Link to="/" onClick={() => isStealth && toggleMode()}>
          <img src={logo} alt="Logo" className="h-20 w-auto cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium text-lg relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHovered(item.link)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.name === "Services" ? (
                <div ref={dropdownRef}>
                  <button
                    onClick={() => {
                      setIsServicesOpen(!isServicesOpen);
                      // Reset submenu state when closing main menu
                      if (isServicesOpen) {
                        setIsSocialMediaSubMenuOpen(false);
                      }
                    }}
                    className="flex items-center gap-1 relative group px-1 py-1 transition text-black cursor-pointer"
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                      size={14}
                    />
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${isServicePage || isSocialMediaServiceActive
                        ? "w-full bg-lime-400 shadow-[0_0_6px_rgba(0,0,0,0.4)]"
                        : "w-0 group-hover:w-full bg-white"
                        }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-3 w-80 max-h-72 overflow-y-auto bg-[#71b5f0] text-black shadow-lg rounded-lg origin-top transition duration-300 ${isServicesOpen ? "animate-fadeScale" : "hidden"
                      }`}
                  >
                    {/* Main Services */}
                    {mainServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.link}
                        onClick={() => setIsServicesOpen(false)}
                        onMouseEnter={() => setHovered(service.link)}
                        onMouseLeave={() => setHovered(null)}
                        className="relative block px-4 py-3 transition text-black group text-base"
                      >
                        {service.name}
                        <span
                          className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${location.pathname === service.link
                            ? "w-full bg-lime-400 shadow-[0_0_6px_rgba(0,0,0,0.4)]"
                            : "w-0 group-hover:w-full bg-white"
                            }`}
                        />
                      </Link>
                    ))}

                    {/* Social Media Marketing Services Submenu */}
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsSocialMediaSubMenuOpen(!isSocialMediaSubMenuOpen);
                        }}
                        className="flex items-center justify-between w-full px-4 py-3 text-black group text-base font-semibold cursor-pointer"
                        onMouseEnter={() => setHovered("social-media-marketing")}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <span>Social Media Marketing Services</span>
                        <FaChevronDown
                          className={`transform transition-transform duration-200 ${isSocialMediaSubMenuOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                          size={12}
                        />
                      </button>
                      <div className={`pl-3 transition-all duration-300 ease-in-out overflow-hidden ${isSocialMediaSubMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {socialMediaServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.link}
                            onClick={() => setIsServicesOpen(false)}
                            onMouseEnter={() => setHovered(service.link)}
                            onMouseLeave={() => setHovered(null)}
                            className="relative block px-4 py-3 transition text-black group text-sm"
                          >
                            {service.name}
                            <span
                              className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${location.pathname === service.link
                                ? "w-full bg-lime-400 shadow-[0_0_6px_rgba(0,0,0,0.4)]"
                                : "w-0 group-hover:w-full bg-white"
                                }`}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.link}
                  className="relative group px-1 py-1 transition text-black"
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${location.pathname === item.link
                      ? "w-full bg-lime-400 shadow-[0_0_6px_rgba(0,0,0,0.4)]"
                      : "w-0 group-hover:w-full bg-white"
                      }`}
                  />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={handleToggleMode}
          className="ml-6 px-5 py-2 rounded-full bg-lime-400 text-black font-bold shadow-lg shadow-black/50 hover:brightness-110 transition hidden md:flex cursor-pointer"
        >
          {isStealth ? "TOGGLE ATTACK MODE" : "TOGGLE STEALTH MODE"}
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#71b5f0] text-black shadow-lg rounded-3xl px-6 py-4 animate-fadeScale">
          <ul className="flex flex-col gap-4 text-lg">
            {navItems.map((item) =>
              item.name === "Services" ? (
                <li key="services">
                  <button
                    onClick={() => {
                      console.log('Main Mobile Services Clicked. Current state:', isMobileServicesOpen);
                      console.log('Social Media Submenu state:', isSocialMediaSubMenuOpen);
                      setIsMobileServicesOpen(!isMobileServicesOpen);
                      // Only reset submenu state when closing main menu AND when the submenu is open
                      // This prevents resetting the state when just opening the main menu
                      if (isMobileServicesOpen && isSocialMediaSubMenuOpen) {
                        console.log('Resetting Social Media Submenu state');
                        setIsSocialMediaSubMenuOpen(false);
                      }
                    }}
                    className="flex items-center gap-2 w-full"
                  >
                    Services
                    <FaChevronDown
                      className={`transition-transform duration-200 ease-in-out ${isMobileServicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                      size={14}
                    />
                  </button>
                  {(isMobileServicesOpen || isSocialMediaSubMenuOpen) && (
                    <div className="mt-2 ml-4 max-h-64 overflow-y-auto pr-2">
                      {/* Main Services */}
                      {mainServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.link}
                          className="block py-2 text-base hover:text-white"
                          onClick={() => {
                            setIsMobileServicesOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}

                      {/* Social Media Marketing Services Submenu */}
                      <div className="py-2">
                        <button
                          className="flex items-center justify-between w-full  py-2 text-base"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log('Social Media Submenu Clicked. Current state:', isSocialMediaSubMenuOpen);
                            setIsSocialMediaSubMenuOpen(!isSocialMediaSubMenuOpen);
                            console.log('Social Media Submenu New state:', !isSocialMediaSubMenuOpen);
                          }}
                        >
                          <span>Social Media Marketing Services</span>
                          <FaChevronDown
                            className={`transform transition-transform duration-200 ease-in-out ${isSocialMediaSubMenuOpen ? 'rotate-180' : 'rotate-0'
                              }`}
                            size={12}
                          />
                        </button>
                        <div className={` pl-3 transition-all duration-300 ease-in-out overflow-hidden ${isSocialMediaSubMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          {socialMediaServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.link}
                              className="block py-2 text-sm hover:text-white"
                              onClick={() => {
                                setIsSocialMediaSubMenuOpen(false);
                                setIsMobileServicesOpen(false);
                                setIsOpen(false);
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
            <li>
              <button
                onClick={() => {
                  handleToggleMode();
                  setIsOpen(false);
                }}
                className="mt-4 w-full px-4 py-2 bg-lime-400 text-black font-bold rounded-full shadow-lg shadow-black/50 cursor-pointer"
              >
                {isStealth ? "TOGGLE ATTACK MODE" : "TOGGLE STEALTH MODE"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
