import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import { WhatsApp } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import { LocationOn } from "@material-ui/icons";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <WhatsApp /> <FacebookIcon /><LocationOn/>
      </div>
      <p> &copy; 2024</p>
    </div>
  );
}

export default Footer;
