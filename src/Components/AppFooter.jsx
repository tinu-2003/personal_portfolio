import React from 'react'

function AppFooter({theme}) {
    const year = new Date().getFullYear();
  return (
    <>
    <footer className={theme?"pt-12 pb-6  bg-[#0f1720]  text-center":"pt-12 pb-6 border-t border-gray-300 text-center"}>
{/* Navigation */}
<nav className="flex justify-center gap-10 text-gray-800 text-lg mb-8">
<a href="#about" className={theme?"hover:text-blue-600 transition text-white":"hover:text-blue-600 transition"}>About</a>
<a href="#projects" className={theme?"hover:text-blue-600 transition text-white":"hover:text-blue-600 transition"}>Projects</a>
<a href="#contact" className={theme?"hover:text-blue-600 transition text-white":"hover:text-blue-600 transition"}>Contact</a>
<a href="#resume" className={theme?"hover:text-blue-600 transition text-white":"hover:text-blue-600 transition"}>Resume</a>
</nav>

{/* Icons */}
<div className={theme?"flex justify-center gap-10 text-gray-300 text-3xl mb-6":"flex justify-center gap-10 text-gray-800 text-3xl mb-6"}>
{/* User Icon */}
<a href="#" aria-label="Profile" className="hover:text-blue-600 transition">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
fill="currentColor"
/>
<path
d="M4 20C4 16.6863 7.13401 14 11 14H13C16.866 14 20 16.6863 20 20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V20Z"
fill="currentColor"
/>
</svg>
</a>


{/* Code Icon */}
<a href="#" aria-label="Code" className="hover:text-blue-600 transition">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L3 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6L21 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</a>


{/* Email Icon */}
<a href="mailto:you@example.com" aria-label="Email" className="hover:text-blue-600 transition">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
d="M2 6L12 13L22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6Z"
fill="currentColor"
/>
<path d="M2 6L12 13L22 6H2Z" fill="currentColor" />
</svg>
</a>
</div>


{/* Copyright */}
<p className={theme?"text-gray-300 text-sm":"text-gray-800 text-sm"}>© {year} John Babu. All rights reserved.</p>
</footer>
    </>
  )
}

export default AppFooter