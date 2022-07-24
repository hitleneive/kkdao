import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import KKLogo from "../../assets/kkLogo.png";
import Image360Viewer from "../../components/Image360Viewer";
import SocialButtons from "../../components/SocialButtons";
import { SETTING_HOMEPAGE } from "../../constants";
import "./introVideoLandingPage.css";

const preloadVideo = (video, url, onFinish) => {
  if (window[url]) {
    var vid = URL.createObjectURL(window[url]);
    video.src = vid;
    return onFinish();
  }
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";

  req.onload = function () {
    // Onload is triggered even on 404
    // so we need to check the status code
    if (this.status === 200) {
      var videoBlob = this.response;
      window[url] = videoBlob;
      var vid = URL.createObjectURL(videoBlob); // IE10+
      // Video is now downloaded
      // and we can set it as source on the video element
      video.src = vid;
      onFinish();
    }
  };
  req.onerror = function () {};
  req.send();
};

function LandingPage({
  data = SETTING_HOMEPAGE,
  onFinished,
  isSmallDesktop,
  isMobile,
  setLoadedVideo = () => {},
  setPercent = () => {},
  startVideo = false,
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

  useEffect(() => {
    preloadVideo(
      document.getElementById("intro-video-start"),
      "https://res.cloudinary.com/da0h1pc6y/video/upload/v1658540595/kkdao/1920x1080-Vien-da.mp4",
      () => {
        setLoadedVideo(true);
      }
    );
    if (isMobile || isSmallDesktop) {
      // Fake loading
      setPercent(10 + Math.round(Math.random() * 20));
      setTimeout(() => setPercent(30 + Math.round(Math.random() * 30)), 500);
      setTimeout(() => setPercent(70 + Math.round(Math.random() * 20)), 1000);
      setTimeout(() => setPercent(100), 1700);
    }
  }, []);

  useEffect(() => {
    if (startVideo && !stage) {
      document.getElementById("intro-video-start")?.play();
      preloadVideo(
        document.getElementById("intro-video-zoom"),
        "https://res.cloudinary.com/da0h1pc6y/video/upload/v1658540594/kkdao/1920x1080-Zoom.mp4",
        () => {}
      );
    }
  }, [startVideo, stage]);

  return (
    <div>
      <div className="header">
        <SocialButtons
          data={data?.cta}
          leftIcon={<Logo link={data?.cta?.logo_link} />}
        />
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
        // src={IntroVideoMOV}
        playsInline
        muted
        preload="auto"
        // onCanPlayThrough={(evt) => {
        //   console.log(
        //     "onCanPlayThrough",
        //     evt,
        //     evt.target?.buffered.end(0),
        //     evt.target?.seekable.end(0)
        //   );
        //   if (
        //     Math.round(evt.target?.buffered.end(0)) /
        //       Math.round(evt.target?.seekable.end(0)) ===
        //     1
        //   )
        //     setLoadedVideo(true);
        // }}
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
        src="https://res.cloudinary.com/da0h1pc6y/video/upload/v1658540594/kkdao/1920x1080-Zoom.mp4"
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
          {!isMobile && !isSmallDesktop && (
            <Image360Viewer
              amount={100}
              imagePath="https://res.cloudinary.com/da0h1pc6y/image/upload/v1658540460/intro-rock-1920x1080"
              fileName="da-tach-nen_000{index}.png"
              start={50}
              trackingHover={renderText && !isMobile}
              setPercent={setPercent}
            />
          )}
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
                    <span>{data.title}</span>
                    {/* {data.title.split("").map((x, index) => (
                      <span key={index}>{x}</span>
                    ))} */}
                  </>
                ) : (
                  <>
                    {data.title
                      .split("")
                      .filter((x) => x != " ")
                      .map((x, index) => (
                        <span key={index}>{x}</span>
                      ))}
                  </>
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
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
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

const Logo = ({ link }) => (
  <a
    className="kklogo"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <img src={KKLogo} alt="KKLogo" />
  </a>
);

export default LandingPage;
