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
            Phone: (+91) 9991976174
            <br />
            Email: learnuniq@gmail.com
          </p>
          <a
            style={{ fontSize: "14px", color: "blue" }}
            href="https://wa.me/+919991976174?text=Hello Sir, I want to Inquiry About Course from your Universal Academy."
          >
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
      <p style={{ textAlign: "center" }} className="mb-3">
        Copyright © 2023 Universal Academy. All Rights Reserved | Crafted by
        ravijaat2917@gmail.com
      </p>
    </>
  );
};

export default Footer;
