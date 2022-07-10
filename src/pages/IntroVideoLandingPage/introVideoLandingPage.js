import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import KKLogo from "../../assets/kkLogo.png";
import IntroVideoMOV from "../../assets/video/1920x1080-Vien-da.mp4";
import ZoomVideo from "../../assets/video/1920x1080-Zoom.mp4";
import Image360Viewer from "../../components/Image360Viewer";
import SocialButtons from "../../components/SocialButtons";
import "./introVideoLandingPage.css";

function LandingPage({ onFinished }) {
  const isSmallDesktop = window.innerWidth >= 768 && window.innerWidth <= 1440;
  const isMobile = window.innerWidth < 768;

  const [renderText, setRenderText] = useState(false);
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(50);
  // const [hideContent, setHideContent] = useState(true);
  //   const handleMouseMove = (e) => {
  //     if (coord.x < e.screenX) {
  //       if (currentImage === 100) return;
  //       setCurrentImage(currentImage + 1);
  //     } else if (coord.x > e.screenX) {
  //       if (currentImage === 0) return;
  //       setCurrentImage(currentImage - 1);
  //     }
  //     setCoord({ x: e.screenX, y: e.screenY });
  //   };

  // 0 : stage intro
  // 1 : show static background
  // 2 : show video background + content
  // 3 : start zoom
  const [stage, setStage] = useState(null);

  useEffect(() => {
    if (stage == null) setStage(0);

    if (stage === 3) {
      document.getElementById("intro-video-zoom").play();
      // setTimeout(() => hideContent(true), 100);
    }
  }, [stage]);

  return (
    <div>
      <div className="header">
        <SocialButtons leftIcon={<Logo />} />
      </div>
      {/* <video
                        id='intro-video-background'
                        src={BackgroundVideo}
                        autoPlay
                        muted
                        loop
                    /> */}

      {/* <video src={IntroVideoMOV} type='video/quicktime'></video> */}

      <video
        id="intro-video-start"
        src={IntroVideoMOV}
        autoPlay
        muted
        preload="auto"
        // className={`${stage === 0 ? "visible" : "invisible"}`}
        onEnded={() => {
          setStage(1);
          setTimeout(() => {
            setStage(2);
            // setHideContent(false);
            setRenderText(true);
          }, 100);
        }}
      >
        {stage === 0
          ? setTimeout(() => {
              var myVideo = document.getElementById("intro-video-start");
              myVideo.play();
            }, 100)
          : null}
      </video>

      <video
        // ref={zoomRef}
        id="intro-video-zoom"
        src={ZoomVideo}
        muted
        className={`${stage === 3 ? "visible" : "invisible"}`}
        onEnded={() => onFinished()}
      ></video>
      <div
        id="intro-center-rock-background"
        className={`${stage == 2 ? "visible" : "invisible"}`}
      >
        <div id="intro-center-rock">
          <Image360Viewer
            amount={100}
            imagePath="/images/intro-rock-500x700"
            fileName="500x700 Da tach nen_000{index}.png"
            start={50}
          />
        </div>
        <AnimatePresence>
          {renderText && (
            <motion.div className="content">
              <motion.h1
                className="title"
                initial={{
                  opacity: 0,
                  y: 200,
                  transitionDuration: "0.5s",
                  transitionDelay: "0s",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: 100 }}
              >
                {isMobile || isSmallDesktop ? (
                  <>
                    <span>KK&nbsp;</span>
                    <br />
                    <span>DAO</span>
                  </>
                ) : (
                  "KKDAO"
                )}
              </motion.h1>
              <motion.div
                className="mainContent"
                initial={{
                  opacity: 0,
                  y: 100,
                  transitionDuration: "0.5s",
                  transitionDelay: "0s",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: 100 }}
              >
                <p>
                  <b style={{ fontFamily: "SFUFutura" }}>FIRST DAO</b> RUN BY A
                  VC FIRM<br></br>IN{" "}
                  <b style={{ fontFamily: "SFUFutura" }}>SOUTHEAST ASIA</b>{" "}
                </p>
                <motion.div
                  className="wrapButton"
                  initial={{
                    opacity: 0,
                    transitionDelay: "0.2s",
                    transitionDuration: "0.5s",
                    y: 100,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                >
                  <button
                    id="button"
                    onClick={() => {
                      setRenderText(false);
                      setStage(3);
                    }}
                  >
                    STEP IN
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const Logo = () => (
  <div
    className="kklogo"
    onClick={() => (window.location.href = "https://www.kkfund.co/")}
  >
    <img src={KKLogo} alt="KKLogo" style={{ width: "75%" }} />
  </div>
);

export default LandingPage;
