import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import KKLogo from "../../assets/kkLogo.png";
import IntroVideoMOV from "../../assets/video/1920x1080-Vien-da.mp4";
import ZoomVideo from "../../assets/video/1920x1080-Zoom.mp4";
import Image360Viewer from "../../components/Image360Viewer";
import SocialButtons from "../../components/SocialButtons";
import "./introVideoLandingPage.css";

function LandingPage({
  onFinished,
  isSmallDesktop,
  isMobile,
  setLoadedVideo = () => {},
  setPercent = () => {},
}) {
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
    document.querySelector("#identifier canvas")?.setAttribute("width", "1920");
    document
      .querySelector("#identifier canvas")
      ?.setAttribute("height", "1080");
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
        playsInline
        autoPlay
        muted
        preload="auto"
        onLoadedData={() => {
          console.log("loaded");
          setLoadedVideo(true);
        }}
        // className={`${stage === 0 ? "visible" : "invisible"}`}
        onEnded={() => {
          setStage(1);
          const time = setInterval(() => {
            setStage(2);
            // setHideContent(false);
            setRenderText(true);
            clearInterval(time);
          }, 100);
        }}
      >
        {/* {stage === 0
          ? setTimeout(() => {
              var myVideo = document.getElementById("intro-video-start");
              myVideo.play();
            }, 100)
          : null} */}
      </video>

      <video
        // ref={zoomRef}
        playsInline
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
        {renderText && (
          <div className="rock-block" onClick={() => setStage(3)}></div>
        )}
        <div id="intro-center-rock">
          <Image360Viewer
            amount={100}
            imagePath="/kkdao/images/intro-rock-1920x1080"
            fileName="da-tach-nen_000{index}.png"
            start={50}
            trackingHover={renderText && !isMobile}
            setPercent={setPercent}
          />
        </div>
        <AnimatePresence>
          {renderText && (
            <motion.div className="content">
              <motion.h1
                className="title"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0,
                  ease: "easeInOut",
                }}
                exit={{
                  opacity: 0,
                }}
              >
                {isMobile || isSmallDesktop ? (
                  <>
                    <span>KK</span>
                    <br />
                    <span>
                      DA<span>O</span>
                    </span>
                  </>
                ) : (
                  <span>
                    KKDA<span>O</span>
                  </span>
                )}
              </motion.h1>
              <motion.div
                className="mainContent"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                exit={{
                  opacity: 0,
                }}
              >
                <p className="introContent">
                  <b style={{ fontFamily: "SFUFutura" }}>FIRST DAO</b> RUN BY A
                  VC FIRM<br></br>IN{" "}
                  <b style={{ fontFamily: "SFUFutura" }}>SOUTHEAST ASIA</b>{" "}
                </p>
                <motion.div
                  className="wrapButton"
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  transition={{
                    duration: 0.1,
                    delay: 0.4,
                    ease: "easeInOut",
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                  }}
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
  <a
    className="kklogo"
    href="https://www.kkfund.co/"
    target="_blank"
    rel="noreferrer"
  >
    <img src={KKLogo} alt="KKLogo" />
  </a>
);

export default LandingPage;
