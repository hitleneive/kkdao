import EmailLogo from "../assets/Frame 2529.svg";
import TwitterLogo from "../assets/twitter.svg";

const SocialButtons = ({ leftIcon, data = {} }) => {
  return (
    <div>
      <div className="logo">
        {leftIcon}
        <div className="emailTwitter">
          <a className="emailLogo" href={data.email}>
            <img src={EmailLogo} alt="EmailLogo" height={44} width={44} />
          </a>
          <a href={data.twitter_link}>
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
