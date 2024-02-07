import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          Designed & Developed by <a href="">Innovis Solution</a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} - Patrick Okocha II. All rights
          reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
