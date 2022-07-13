import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <a
          class="glassIco"
          href="https://goo.gl/maps/eH4vxhLr2pq3uscu8"
          target="_blank"
          rel="noreferrer"
        >
          <MdLocationPin />
        </a>
        <a
          class="glassIco"
          href="mailto:asvaabuad@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <HiMail />
        </a>
        <a
          class="glassIco"
          href="https://www.instagram.com/a.s.v.a__/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          class="glassIco"
          href="https://www.linkedin.com/company/abuad-salt-valley-associates-asva/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          class="glassIco"
          href="https://mobile.twitter.com/asva__"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
        }}
      >
        <img
          src="../Assets/logo1.png"
          alt="logo"
          style={{
            // alignItems: "center",
            height: "10rem",
            width: "10rem",
          }}
        />

        <p>
          <AiOutlineCopyrightCircle /> 2022 Abuad Salt Valley Associates. All
          rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
