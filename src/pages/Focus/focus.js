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

import { useRef, useState } from "react";
import Slider from "react-slick";
import BackButton from "../../assets/back-button.svg";
import imageBuc from "../../assets/resources/mobile/buc.png";
import Arrow from "../../components/Arrow.jsx";
import { FOCUS_DEFAULT_IMAGE_MOBILE } from "../../constants";

function FocusPage({ goToInvestor, isSmallDesktop, isMobile }) {
  const settings = {
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
          <div className="pillar">
            <img className="daosImg" src={DaosImg}></img>
            <img className="daos" src={Daos}></img>
          </div>
          <div className="pillar">
            <img className="daosImg" src={DefiImg}></img>
            <img className="daos" src={Defi}></img>
          </div>
          <div className="pillar">
            <img className="daosImg" src={CefiImg}></img>
            <img className="daos" src={Cefi}></img>
          </div>
          <div className="pillar">
            <img className="daosImg" src={Web3Img}></img>
            <img className="daos" src={Web3App}></img>
          </div>
        </div>
      )}
      {!(isSmallDesktop || isMobile) && (
        <div className="row2">
          <div className="pillar">
            <img className="daosImg" src={InfraImg}></img>
            <img className="daos" src={Infratructure}></img>
          </div>
          <div className="pillar">
            <img className="daosImg" src={WalletImg}></img>
            <img className="daos" src={Wallet}></img>
          </div>
          <div className="pillar">
            <img className="daosImg" src={GamingImg}></img>
            <img className="daos" src={Gaming}></img>
          </div>
          <div className="pillar">
            <img className="daosImg" src={NFTImg}></img>
            <img className="daos" src={NFT}></img>
          </div>
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
              <span className="actionNumber">{currentIndex + 1}</span>/
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
