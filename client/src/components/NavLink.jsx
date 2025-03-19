// src/components/NavLink.jsx
import React from 'react';

const NavLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#' from the href
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="nav-link">
      {children}
    </a>
  );
};

export default NavLink;
