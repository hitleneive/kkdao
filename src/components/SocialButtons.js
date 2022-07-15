import EmailLogo from "../assets/Frame 2529.svg";
import TwitterLogo from "../assets/twitter.svg";

const SocialButtons = ({ leftIcon }) => {
  return (
    <div>
      <div className="logo">
        {leftIcon}
        <div className="emailTwitter">
          <a
            className="emailLogo"
            href="mailto:info@kkfund.co?subject=Register"
          >
            <img src={EmailLogo} alt="EmailLogo" height={44} width={44} />
          </a>
          <a href="#">
            <img
              src={TwitterLogo}
              alt="TwitterLogo"
              className="twitterLogo"
              height={44}
              width={44}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
