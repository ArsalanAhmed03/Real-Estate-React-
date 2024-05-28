import React from 'react';
import '../styles/footer-styles.css'

export default function Footer()  {
  return (
    <footer>
      <p>Copyright 2024 UAELANDMARKS.com All rights reserved</p>
      <div className="footer-options">
        <a href="#">Terms & Conditions |</a>
        <a href="#"> Privacy Policy |</a>
        <a href="#"> Disclaimer</a>
      </div>
      <img src="../images/City10.png" width="200" />
    </footer>
  );
};
