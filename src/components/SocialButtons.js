import EmailLogo from "../assets/Frame 2529.svg";
import TwitterLogo from "../assets/Frame 2530.svg";

const SocialButtons = ({ leftIcon }) => {
  return (
    <div>
      <div className="logo">
        {leftIcon}
        <div className="emailTwitter">
          <img
            src={EmailLogo}
            alt="EmailLogo"
            className="emailLogo"
            onClick={() => {
              window.open("mailto:info@kkfund.co?subject=Register");
            }}
            style={{
              width: "35%",
            }}
          />
          <img
            src={TwitterLogo}
            alt="TwitterLogo"
            className="twitterLogo"
            style={{
              width: "45%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
