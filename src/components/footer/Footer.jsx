import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        APARTRIDGE16
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://facebook.com/aaron.partridge.12'
          target='_blank'
          rel='norreferer'
        >
          <FaFacebookF />
        </a>
        <a
          href='https://instagram.com/aaron.partridge/'
          target='_blank'
          rel='norreferer'
        >
          <FaInstagram />
        </a>
        <a
          href='https://twitter.com/aaronpartridge7'
          target='_blank'
          rel='norreferer'
        >
          <FaTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Pear Tree Productions. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
