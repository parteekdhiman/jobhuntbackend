import React, { useRef, useEffect, useState } from "react";

const NavbarWithDropdown = () => {
  const coursesBtn = useRef(null);
  const coursesDropdown = useRef(null);
  const chevron = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = (e) => {
    e.preventDefault();
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  // Open dropdown
  const openDropdown = () => {
    if (coursesDropdown.current) {
      coursesDropdown.current.classList.remove("hidden");
      coursesDropdown.current.classList.add("dropdown-enter");
    }
    if (chevron.current) {
      chevron.current.style.transform = "rotate(180deg)";
    }
    setIsDropdownOpen(true);
    setTimeout(() => {
      if (coursesDropdown.current) {
        coursesDropdown.current.classList.remove("dropdown-enter");
        coursesDropdown.current.classList.add("dropdown-enter-active");
      }
    }, 10);
  };

  // Close dropdown
  const closeDropdown = () => {
    if (coursesDropdown.current) {
      coursesDropdown.current.classList.remove("dropdown-enter-active");
      coursesDropdown.current.classList.add("dropdown-exit-active");
    }
    if (chevron.current) {
      chevron.current.style.transform = "rotate(0deg)";
    }
    setIsDropdownOpen(false);
    setTimeout(() => {
      if (coursesDropdown.current) {
        coursesDropdown.current.classList.add("hidden");
        coursesDropdown.current.classList.remove("dropdown-exit-active");
      }
    }, 200);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        coursesBtn.current &&
        coursesDropdown.current &&
        !coursesBtn.current.contains(e.target) &&
        !coursesDropdown.current.contains(e.target)
      ) {
        closeDropdown();
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Set font family on body
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduPlatform
                </h1>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  About
                </a>
                {/* Courses Dropdown Button */}
                <div className="relative">
                  <button
                    id="coursesBtn"
                    ref={coursesBtn}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 focus:outline-none"
                    onClick={toggleDropdown}
                  >
                    <span>Courses</span>
                    <svg
                      id="chevron"
                      ref={chevron}
                      className="w-4 h-4 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </div>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Full Width Dropdown */}
      <div
        id="coursesDropdown"
        ref={coursesDropdown}
        className="hidden bg-white shadow-xl border-b border-gray-100 absolute w-full z-40"
        style={{ left: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Programming Courses */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-blue-100 pb-2">
                Programming
              </h3>
              <div className="space-y-3">
                <a href="#" className="block group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">JS</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-blue-600">JavaScript Fundamentals</p>
                      <p className="text-sm text-gray-500">Learn modern JavaScript from scratch</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">PY</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-blue-600">Python for Beginners</p>
                      <p className="text-sm text-gray-500">Start your programming journey</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C#</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-blue-600">C# Development</p>
                      <p className="text-sm text-gray-500">Build desktop and web applications</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Design Courses */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-purple-100 pb-2">
                Design
              </h3>
              <div className="space-y-3">
                <a href="#" className="block group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">UI</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-purple-600">UI/UX Design</p>
                      <p className="text-sm text-gray-500">Create beautiful user experiences</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">GD</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-purple-600">Graphic Design</p>
                      <p className="text-sm text-gray-500">Master visual communication</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">WD</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-purple-600">Web Design</p>
                      <p className="text-sm text-gray-500">Design modern websites</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Business Courses */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-green-100 pb-2">
                Business
              </h3>
              <div className="space-y-3">
                <a href="#" className="block group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">MK</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-green-600">Digital Marketing</p>
                      <p className="text-sm text-gray-500">Grow your online presence</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">PM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-green-600">Project Management</p>
                      <p className="text-sm text-gray-500">Lead teams effectively</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DA</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-green-600">Data Analytics</p>
                      <p className="text-sm text-gray-500">Make data-driven decisions</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Bottom CTA Section */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Ready to start learning?</h4>
                <p className="text-gray-600">Join thousands of students already learning with us.</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                  Browse All Courses
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                  Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Our Learning Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Click on "Courses" in the navbar to see the beautiful full-width dropdown!
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Content</h2>
            <p className="text-gray-600 leading-relaxed">
              This is your main content area. The navbar above features a beautiful courses dropdown
              that spans the full width of the page with organized course categories, hover effects,
              and smooth animations.
            </p>
          </div>
        </div>
      </main>
      {/* Tailwind CDN and Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .dropdown-enter {
          opacity: 0;
          transform: translateY(-10px);
        }
        .dropdown-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s ease-out;
        }
        .dropdown-exit {
          opacity: 1;
          transform: translateY(0);
        }
        .dropdown-exit-active {
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.2s ease-in;
        }
      `}</style>
      {/* Tailwind CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default NavbarWithDropdown;