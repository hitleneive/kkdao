import { useEffect, useState } from "react";
import BackButton from "../../assets/back-icon.svg";
import SocialButtons from "../../components/SocialButtons";
import About from "../About/About";
import FocusPage from "../Focus/focus";
import Investor from "../Investor/Investor";
import Loading from "../Loading/loading";
import SignUp from "../SignUp/SignUp";

import LandingPage from "../IntroVideoLandingPage/introVideoLandingPage";
import "./PageWrapper.css";

import { useRef } from "react";
import TrackVisibility from "react-on-screen";
import Footer from "../Footer";
import ToTop from "../ToTop";
import { useHorizontalScroll } from "./../../components/useHorizontal";

// const InvestorPage = (props) => {
//   return <Investor {...props} />;
// };

const PageWrapper = () => {
  // const scrollRef = useHorizontalScroll();
  // Refs

  const scrollRef = useHorizontalScroll();
  const focusRef = useRef(null);
  const investorRef = useRef(null);
  const signUpRef = useRef(null);

  const wrapRef = useRef(null);

  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [loadedVideo, setLoadedVideo] = useState(false);
  const [percent, setPercent] = useState(0);

  const isSmallDesktop = widthScreen >= 768 && widthScreen < 1000;
  const isMobile = widthScreen < 768;

  const handleResize = () => {
    setWidthScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (wrapRef.current) {
      wrapRef.current.addEventListener("wheel", (evt) => {
        if (!(isMobile || isSmallDesktop)) {
          evt.preventDefault();
          wrapRef.current.scrollLeft += evt.deltaY;
        }
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (loadedVideo && percent >= 99) setCurrentPage(1);
  }, [loadedVideo, percent]);

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
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      {currentPage === 0 && (
        <Loading loadedVideo={loadedVideo} percent={percent} />
      )}
      {(currentPage === 0 || currentPage === 1) && (
        <LandingPage
          onFinished={() => setCurrentPage(2)}
          isSmallDesktop={isSmallDesktop}
          isMobile={isMobile}
          setLoadedVideo={setLoadedVideo}
          setPercent={setPercent}
        />
      )}
      {currentPage !== 0 && currentPage !== 1 && (
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
              <Investor isSmallDesktop={isSmallDesktop} isMobile={isMobile} />
            </TrackVisibility>

            <div className="page-container" ref={pageRefs[2].ref}>
              <SignUp isSmallDesktop={isSmallDesktop} isMobile={isMobile} />
            </div>
            {(isSmallDesktop || isMobile) && <Footer />}
            {(isSmallDesktop || isMobile) && <ToTop />}
          </div>
        </div>
      )}
    </>
  );
};

const BackIcon = ({ back }) => {
  return (
    <div>
      <img
        src={BackButton}
        alt="BackIcon"
        className="backIcon"
        style={{ height: 52, width: 52 }}
        onClick={() => back()}
      />
    </div>
  );
};

export default PageWrapper;
