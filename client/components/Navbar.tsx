import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Latest Designs", to: "/latest-designs" },
    { label: "About Us", to: "/about" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 10.002L7 4.002M7 4.002L11.311 8.705C11.897 9.344 12.19 9.663 12.575 9.833C12.959 10.002 13.393 10.002 14.26 10.002H22.5L18.189 5.299C17.603 4.66 17.31 4.341 16.925 4.171C16.541 4.001 16.107 4.001 15.24 4.001L7 4.002ZM11 8.5V20H7C5.114 20 4.172 20 3.586 19.414C3 18.828 3 17.885 3 16V8.5"
              stroke="#0A1634"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 20H17C18.886 20 19.828 20 20.414 19.414C21 18.828 21 17.885 21 16V10M4 7V4M7.125 11.25H7M7 20V16M15 14H17M7.25 11.25C7.25 11.3163 7.22366 11.3799 7.17678 11.4268C7.12989 11.4737 7.0663 11.5 7 11.5C6.9337 11.5 6.87011 11.4737 6.82322 11.4268C6.77634 11.3799 6.75 11.3163 6.75 11.25C6.75 11.1837 6.77634 11.1201 6.82322 11.0732C6.87011 11.0263 6.9337 11 7 11C7.0663 11 7.12989 11.0263 7.17678 11.0732C7.22366 11.1201 7.25 11.1837 7.25 11.25Z"
              stroke="#0A1634"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-navy font-medium text-[13px]">
            Design Solution
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[12px] font-normal transition-colors hover:text-navy ${
                location.pathname === link.to
                  ? "text-navy font-medium"
                  : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden md:inline-flex items-center justify-center bg-navy text-white text-[13px] font-normal rounded-full px-7 py-1.5 hover:bg-navy/90 transition-colors"
          >
            Login
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                  <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-[14px] font-normal py-1 ${
                location.pathname === link.to
                  ? "text-navy font-medium"
                  : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center bg-navy text-white text-[13px] font-normal rounded-full px-7 py-2 hover:bg-navy/90 transition-colors w-fit mt-2"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
