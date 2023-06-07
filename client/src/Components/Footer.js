import React from "react";
import "../Styles/FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Contents">
          <h4>Dharuhera</h4>
          <p>
            Ganpati Plaza, 1st floor, Nandrampur Bass Rd, Dharuhera, Haryana
            <br /> 123106
            <br />
            Phone: 09991976174
            <br />
            Email: universalAcademy@gmail.com
          </p>
          <a style={{ fontSize: "14px" }} href="https://wa.me/8814882204">
            {" "}
            Message Us on <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className="Contents">
          <h4>Quick Links</h4>
          <a>About Us</a>
          <br />
          <a>Fresh Openings</a>
          <br />
          <a>Placed Students</a>
          <br />
          <a>Interview Preparation</a>
          <br />
          <a>Privacy Policy</a>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        Copyright © 2023 universalAcademy. All Rights Reserved | Crafted by
        <a style={{ fontSize: "14px" , padding:'12px' }}>ravijaat2917@gmail.com</a>
      </p>
    </>
  );
};

export default Footer;
