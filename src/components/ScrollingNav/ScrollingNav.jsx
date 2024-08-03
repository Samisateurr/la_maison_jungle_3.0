import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ScrollingNav.scss';

function ScrollingNav() {
  const pages = ['Home', 'Plants', 'About', 'Contact'];
  const location = useLocation();
  const currentPage = pages.find(page => location.pathname.includes(page.toLowerCase().replace(' ', ''))) || 'Home';
  const [currentIndex, setCurrentIndex] = useState(pages.indexOf(currentPage));

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pages.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pages.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisiblePages = () => {
    const totalPages = pages.length;
    const startIndex = (currentIndex - 1 + totalPages) % totalPages;
    return [
      pages[startIndex],
      pages[(startIndex + 1) % totalPages],
      pages[(startIndex + 2) % totalPages],
    ];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="scrolling-nav">
      <button className="arrow left" onClick={handleLeftClick} aria-label="Previous">❮</button>
      <div className="pages">
        {visiblePages.map((page, i) => (
          <Link
            key={page}
            to={`/${page.toLowerCase().replace(' ', '')}`}
            className={`nav-item ${i === 1 ? 'center' : ''} ${page === currentPage ? 'active' : ''}`}
          >
            {page}
          </Link>
        ))}
      </div>
      <button className="arrow right" onClick={handleRightClick} aria-label="Next">❯</button>
    </div>
  );
}

export default ScrollingNav;
