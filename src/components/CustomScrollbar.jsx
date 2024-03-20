import React from 'react';
import './Css/CustomScrollbar.css'; // Import custom CSS file

function CustomScrollbar() {
  return (
    <div className="h-screen overflow-y-scroll  md:overflow-y-hidden hidden md:block">
    </div>
  );
}

export default CustomScrollbar;
