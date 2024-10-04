/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgb(78, 86, 126)",
        // backgroundColor: primaryColor,
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a style={{color:"white"}} href="#home">Home</a>
      <a style={{color:"white"}} href="#about">About</a>
      <a style={{color:"white"}} href="#portfolio">Portfolio</a>
      <a style={{color:"white"}} href="#footer">Contact</a>
    </div>
  );
};

export default Header;
