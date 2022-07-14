import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            padding: "0.5rem",
            bottom: "0",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(2px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            textAlign: "center",
            boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="../Assets/logo2.png"
            alt="logo"
            style={{
              height: "auto",
              width: "8rem",
            }}
          />

          <p>
            <FaRegCopyright /> 2022 Abuad Salt Valley Associates. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
