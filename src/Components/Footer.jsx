import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        class="glassIco"
        href="https://goo.gl/maps/eH4vxhLr2pq3uscu8"
        target="_blank"
      >
        <MdLocationPin />
      </a>
      <a class="glassIco" href="mailto:asvaabuad@gmail.com" target="_blank">
        <HiMail />
      </a>
      <a
        class="glassIco"
        href="https://www.instagram.com/a.s.v.a__/"
        target="_blank"
      >
        <BsInstagram />
      </a>
      <a
        class="glassIco"
        href="https://www.linkedin.com/company/abuad-salt-valley-associates-asva/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        class="glassIco"
        href="https://mobile.twitter.com/asva__"
        target="_blank"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default Footer;
