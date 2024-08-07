// src/useDisableZoom.js
import { useEffect } from 'react';

const useDisableZoom = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event) => {
      if ((event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) || 
          (event.key === 'Meta' && (event.key === '+' || event.key === '-' || event.key === '0'))) {
        event.preventDefault();
      }
    };

    const resetZoom = () => {
      document.body.style.transform = 'scale(1)';
      document.body.style.transformOrigin = '0 0';
    };

    const checkZoom = () => {
      if (window.outerWidth !== window.innerWidth) {
        resetZoom();
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', resetZoom);
    window.addEventListener('scroll', resetZoom);

    // Continuously check for zoom changes
    const zoomInterval = setInterval(checkZoom, 100);

    resetZoom(); // Initial call to set zoom level

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', resetZoom);
      window.removeEventListener('scroll', resetZoom);
      clearInterval(zoomInterval);
    };
  }, []);
};

export default useDisableZoom;
