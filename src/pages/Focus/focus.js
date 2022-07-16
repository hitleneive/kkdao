import Infratructure from "../../assets/Frame 53 (1).svg";
import Cefi from "../../assets/Frame 53.svg";
import NFT from "../../assets/Frame 54 (1).svg";
import Daos from "../../assets/Frame 54.svg";
import Wallet from "../../assets/Frame 55 (1).svg";
import Defi from "../../assets/Frame 55.svg";
import Gaming from "../../assets/Frame 56 (1).svg";
import Web3App from "../../assets/Frame 56.svg";
import "./focus.css";

import CefiImg from "../../assets/CeFi.png";
import DaosImg from "../../assets/DAOs.png";
import DefiImg from "../../assets/DeFi.png";
import GamingImg from "../../assets/Gaming.png";
import InfraImg from "../../assets/Infratructure.png";
import NFTImg from "../../assets/NFT.png";
import WalletImg from "../../assets/Walet.png";
import Web3Img from "../../assets/Web3-Apps.png";

import { useNavigate } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import BackButton from "../../assets/back-button.svg";
import imageBuc from "../../assets/resources/mobile/buc.png";
import Arrow from "../../components/Arrow.jsx";
import { FOCUS_DEFAULT_IMAGE_MOBILE } from "../../constants";

const BoxImage = ({ images, classNames }) => {
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
      <img className="daosImg" src={images[0]}></img>
      <img className="daos" src={images[1]}></img>
    </motion.div>
  );
};

function FocusPage({ goToInvestor, isSmallDesktop, isMobile }) {
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
          F O C U S &nbsp;P R O J E C T
        </div>
        {/* <div className="child2">
          <img className="rock1" src={Rock1}></img>
        </div> */}
      </div>
      {!(isSmallDesktop || isMobile) && (
        <div className="row1">
          <BoxImage images={[DaosImg, Daos]} />
          <BoxImage images={[DefiImg, Defi]} />
          <BoxImage images={[CefiImg, Cefi]} />
          <BoxImage images={[Web3Img, Web3App]} />
        </div>
      )}
      {!(isSmallDesktop || isMobile) && (
        <div className="row2">
          <BoxImage images={[InfraImg, Infratructure]} />
          <BoxImage images={[WalletImg, Wallet]} />
          <BoxImage images={[GamingImg, Gaming]} />
          <BoxImage images={[NFTImg, NFT]} />
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
