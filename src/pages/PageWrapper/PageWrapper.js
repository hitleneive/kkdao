import { useEffect, useState } from "react";
import About from "../About/About";
import FocusPage from "../Focus/focus";
import Investor from "../Investor/Investor";
import SignUp from "../SignUp/SignUp";
import Loading from "../Loading/loading";
import SocialButtons from "../../components/SocialButtons";
import BackButton from "../../assets/back-button.svg";

import "./PageWrapper.css";
import LandingPage from "../IntroVideoLandingPage/introVideoLandingPage";

import { useRef } from "react";
import { useHorizontalScroll } from "./../../components/useHorizontal";
import TrackVisibility from "react-on-screen";
import { useScrollHorizontal } from "../../components/ScrollPage";

const InvestorPage = ({ isVisible }) => {
  console.log(isVisible);

  return <Investor />;
};

const PageWrapper = () => {
  // const scrollRef = useHorizontalScroll();
  // Refs

  const scrollRef = useHorizontalScroll();
  const focusRef = useRef(null);
  const investorRef = useRef(null);
  const signUpRef = useRef(null);

  const wrapRef = useRef(null);

  const isSmallDesktop = window.innerWidth >= 768 && window.innerWidth <= 1000;
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (wrapRef.current) {
      wrapRef.current.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        wrapRef.current.scrollLeft += evt.deltaY;
      });
    }
  });
  //
  const pageRefs = [
    {
      ref: focusRef,
      callback: () =>
        focusRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
    },
    {
      ref: investorRef,
      callback: () =>
        investorRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
    },
    {
      ref: signUpRef,
      callback: () =>
        signUpRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
    },
  ];

  // 0: Loading
  // 1: Video
  // 2: Landing Page
  const [currentPage, setCurrentPage] = useState(1);

  if (currentPage === 0) {
    return <Loading onFinished={() => setCurrentPage(1)} />;
  } else if (currentPage === 1) {
    return <LandingPage onFinished={() => setCurrentPage(2)} />;
  } else {
    return (
      <div>
        <div id="page-wrapper-root" ref={wrapRef}>
          <div id="social-button">
            <SocialButtons
              leftIcon={<BackIcon back={() => setCurrentPage(1)} />}
            />
          </div>
          <div className="page-container">
            <About
              goToFocus={() => pageRefs[2].callback()}
              isSmallDesktop={isSmallDesktop}
              isMobile={isMobile}
            />
          </div>
          <div className="page-container" ref={pageRefs[0].ref}>
            <FocusPage
              goToInvestor={() => pageRefs[1].callback()}
              isSmallDesktop={isSmallDesktop}
              isMobile={isMobile}
            />
          </div>

          <TrackVisibility className="page-container" ref={pageRefs[1].ref}>
            <InvestorPage />
          </TrackVisibility>

          <div className="page-container" ref={pageRefs[2].ref}>
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
};

const BackIcon = ({ back }) => {
  return (
    <div>
      <img
        src={BackButton}
        alt="BackIcon"
        className="backIcon"
        style={{ width: "80%" }}
        onClick={() => back()}
      />
    </div>
  );
};

export default PageWrapper;
