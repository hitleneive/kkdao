import React from "react";
import KKLogo from "../../assets/kkLogo.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div
        className="kklogo"
        onClick={() => (window.location.href = "https://www.kkfund.co/")}
      >
        <img src={KKLogo} alt="KKLogo" />
      </div>
    </div>
  );
}

export default Footer;
