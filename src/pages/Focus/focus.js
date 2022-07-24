import "./focus.css";
import { useNavigate } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import BackButton from "../../assets/back-button.svg";
import imageBuc from "../../assets/resources/mobile/buc.png";
import pcBuc from "../../assets/resources/pc/buc.png";
import Arrow from "../../components/Arrow.jsx";
import { FOCUS_DEFAULT_IMAGE_MOBILE, SETTING_FOCUS } from "../../constants";

const BoxImage = ({ image, text }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      // control.start("hidden");
    }
  }, [control, inView]);

  useEffect(() => {
    control.start("hidden");
  }, []);

  return (
    <motion.div
      className="pillar"
      ref={ref}
      animate={control}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      <img className="daosImg" src={image} />
      <img className="daos" src={pcBuc}/>
      <span>{text}</span>
    </motion.div>
  );
};

function FocusPage({ goToInvestor, isSmallDesktop, isMobile, data = SETTING_FOCUS }) {
  const settings = {
    arrows: false,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const refSlide = useRef(null);

  return (
    <div className="focusPage">
      <div className="titleFocus">
        <div className="child" onClick={() => goToInvestor()}>
          {data.title}
        </div>
        {/* <div className="child2">
          <img className="rock1" src={Rock1}></img>
        </div> */}
      </div>
      {!(isSmallDesktop || isMobile) && (
        <div className="row1">
          {data.projects.slice(data.projects,4).map(item=>(
            <BoxImage key={item.title} image={item.image} text={item.title}/>
          ))}
        </div>
      )}
      {!(isSmallDesktop || isMobile) && (
        <div className="row1">
          {data.projects.slice(4,8).map(item=>(
            <BoxImage key={item.title} image={item.image} text={item.title}/>
          ))}
        </div>
      )}
      {(isSmallDesktop || isMobile) && (
        <div className="slideWrapper">
          <Slider {...settings} ref={refSlide}>
            {FOCUS_DEFAULT_IMAGE_MOBILE.map((item) => (
              <div className="item" key={item.img}>
                <div className="itemInner" key={item.img}>
                  <img className="img" src={item.img}></img>
                </div>
              </div>
            ))}
          </Slider>
          <p className="name">
            {FOCUS_DEFAULT_IMAGE_MOBILE[currentIndex].name}
          </p>
          <img className="buc" src={imageBuc} />
          <div className="action">
            <div
              className="arrow arrowPrev"
              onClick={() => refSlide.current.slickPrev()}
            >
              <Arrow />
            </div>
            <div className="number">
              <span className="actionNumber">{currentIndex + 1}</span>
              <span className="totalNumber">/</span>
              <span className="totalNumber">
                {FOCUS_DEFAULT_IMAGE_MOBILE.length}
              </span>
            </div>
            <div
              className="arrow arrowNext"
              onClick={() => refSlide.current.slickNext()}
            >
              <Arrow />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const BackIcon = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={BackButton}
        alt="BackIcon"
        className="backIcon"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default FocusPage;
