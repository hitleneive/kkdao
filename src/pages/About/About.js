import SocialButtons from "../../components/SocialButtons";
import Rock01 from "../../assets/KKDAO_Rock/Rock01.png";
import Rock02 from "../../assets/KKDAO_Rock/Rock02.png";
import Rock03 from "../../assets/KKDAO_Rock/Rock03.png";
import { motion } from "framer-motion";

import "./About.css";

const About = ({ goToFocus }) => {
  return (
    <div className="about-root-container">
      <div id="backgroundContainer">
        <div id="rockHeaderContainer">
          <img src={Rock02} alt="Rock02" id="about-rock2" />
        </div>

        <div id="about-footer">
          <img src={Rock01} alt="Rock01" id="about-rock1" />
          <img src={Rock03} alt="Rock03" id="about-rock3" />
        </div>
      </div>

      <div id="introContainer">
        <div id="introContainerInner">
          <div id="title">
            <motion.p
              id="title1"
              initial={{
                opacity: 0,
                x: -30,
                transitionDelay: "0s",
                transitionDuration: "0.2s",
                transitionTimingFunction: "easeOut",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
            >
              ABOUT
            </motion.p>{" "}
            <motion.p
              id="title2"
              initial={{
                opacity: 0,
                x: -30,
                transitionDelay: "0.2s",
                transitionDuration: "0.2s",
                transitionTimingFunction: "easeOut",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
            >
              THE
            </motion.p>{" "}
            <motion.p
              id="title3"
              initial={{
                opacity: 0,
                x: -30,
                transitionDelay: "0.4s",
                transitionDuration: "0.2s",
                transitionTimingFunction: "easeOut",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
            >
              TCEJORP
            </motion.p>
          </div>
          <motion.div
            id="subtitleContainer"
            initial={{
              opacity: 0,
              y: 50,
              transitionDelay: "0.5s",
              transitionDuration: "0.5s",
              transitionTimingFunction: "easeOut",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <p
              id="subtitle"
              style={{
                fontFamily: "MontserratRegular",
              }}
            >
              <b
                style={{
                  fontFamily: "MontserratBold",
                  fontWeight: "bold",
                }}
              >
                KK DAO is the first DAO run by a VC firm in Southeast Asia.
              </b>{" "}
              We believe that KK DAO can create opportunities for next
              generation talent in Web 3.0 in developing countries, support the
              underserved talent in emerging markets. We build, support, and
              invest in early blockchain-agnostic startups in the area, DAOs,
              DeFi, CeFi (centralized finance), Web3 Apps, Infrastructure,
              Wallet, Gaming, and NFT.
            </p>
            <motion.button
              id="shareInnovationBtn"
              onClick={() => goToFocus()}
              initial={{
                opacity: 0,
                y: 50,
                transitionDelay: "0.8s",
                transitionDuration: "0.5s",
                transitionTimingFunction: "easeOut",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              <b>Share your innovation here!</b>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
