import React from "react";
import "./../Styles/HeaderStyles.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="contactsLinks">
        <a href="tel:9991976174">Call us : 9991976174</a>{" "}
        <span className="contACTAdIV">|</span>{" "}
        <a href="mailto: learnuniq@gmail.com">
          Email us : learnuniq@gmail.com
        </a>
      </div>
      <div style={{color: 'white',}} className="SocialMedia">
        <div className="socialMedialinks">
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
