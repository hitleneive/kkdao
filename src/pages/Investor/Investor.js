import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Slider from "react-slick";
import Logo from "../../assets/logoInvestor.svg";
import { SETTING_INVESTOR } from "../../constants";
import Rock4 from "./../../assets/KKDAO_Rock/Rock04.png";
import Rock5 from "./../../assets/KKDAO_Rock/Rock05.png";
import bgInvestor from "./../../assets/resources/mobile/bgInvestor.png";
import BackgroundVideo from "./../../assets/video/Section3Final.mp4";
import "./Investor.css";

const logos = [Logo, Logo, Logo, Logo];

const Investor = ({
  goToSignUp,
  isSmallDesktop,
  isMobile,
  data = SETTING_INVESTOR,
}) => {
  const [isDone, setIsDone] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };

  const title = useMemo(
    () => (
      <motion.p
        id="largeTitle"
        initial={{
          opacity: 0,
          x: -50,
          transitionDuration: "1.5s",
          transitionDelay: "2s",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        THE INVESTOR
      </motion.p>
    ),
    []
  );

  const titleMobile = useMemo(
    () => (
      <motion.p
        id="largeTitle"
        initial={{
          opacity: 0,
          x: -50,
          transitionDuration: "1.5s",
          transitionDelay: "2s",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        THE
        <br />
        INVESTOR
      </motion.p>
    ),
    []
  );

  const titleText = useMemo(
    () => (
      <motion.h1
        onClick={() => goToSignUp()}
        id="titleText"
        initial={{
          opacity: 0,
          x: -50,
          transitionDuration: "1s",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        {data.first_investor?.title}
      </motion.h1>
    ),
    [data]
  );

  const subTitleText = useMemo(
    () => (
      <motion.p
        id="subtitleText"
        initial={{
          opacity: 0,
          y: 100,
          transitionDuration: "0.5s",
          transitionDelay: "1s",
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        {data.first_investor?.description}
      </motion.p>
    ),
    [data]
  );

  const slide = useMemo(
    () => (
      <motion.div
        className="carousel"
        initial={{
          opacity: 0,
          x: -50,
          transitionDuration: "1s",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index}>
              <div className="itemInner">
                <img
                  className={firstLoad === true ? "animate" : ""}
                  src={logo}
                  alt={logo}
                ></img>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    ),
    []
  );

  return (
    <motion.div
      id="investor-root-container"
      // drag='x'
      // onDragEnd={() => {
      //   navigate("/signup");
      // }}
    >
      <div id="investor-rocks-layer">
        {!isMobile && <img src={Rock4} alt="Rock4" id="investor-rock4" />}
        {!isMobile && <img src={Rock5} alt="Rock5" id="investor-rock5" />}
      </div>
      {!(isSmallDesktop || isMobile) && (
        <video
          src={BackgroundVideo}
          autoPlay
          preload="auto"
          muted
          onEnded={() => {
            setIsDone(true);
            setTimeout(() => {
              setFirstLoad(false);
            }, 2000);
          }}
          id="investor-video"
        />
      )}
      {(isSmallDesktop || isMobile) && (
        <div id="infoContainer">
          <img className="bgInvestor" src={bgInvestor} alt="bgInvestor" />
          {titleMobile}
          {slide}
          {titleText}
          {subTitleText}
        </div>
      )}
      {isDone && !(isSmallDesktop || isMobile) && (
        <div id="infoContainer">
          {titleText}
          {subTitleText}
          {slide}
          {title}
        </div>
      )}
    </motion.div>
  );
};

export default Investor;
