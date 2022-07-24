import { motion } from "framer-motion";
import Rock01 from "../../assets/KKDAO_Rock/Rock01.png";
import Rock02 from "../../assets/KKDAO_Rock/Rock02.png";
import Rock03 from "../../assets/KKDAO_Rock/Rock03.png";

import { SETTING_ABOUT } from "../../constants";
import "./About.css";

const About = ({ goToFocus, data = SETTING_ABOUT }) => {
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
            {data.title.split(" ").map((title, index) => {
              return (
                <motion.p
                  id="title1"
                  initial={{
                    opacity: 0,
                    x: -30,
                    transitionDelay: `${index * 0.2}s`,
                    transitionDuration: "0.3s",
                    transitionTimingFunction: "easeOut",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                >
                  {title}
                </motion.p>
              );
            })}
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
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></p>
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
              <b>{data.button.content}</b>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
