import { motion } from "framer-motion";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./loading.css";

function Loading({ loadedVideo = false, percent = 0 }) {
  const value = Math.min(Math.max(percent - 10, 0) + (loadedVideo ? 10 : 0) + 1, 100);

  return (
    <motion.div
      className="loading"
      style={{ width: 200, height: 200 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <div>
        <CircularProgressbar
          value={value}
          text={value + "%"}
          styles={buildStyles({
            textColor: "#9EA0A3",
            pathColor: "#9EA0A3",
            trailColor: "#000000 20%",
          })}
          strokeWidth={1}
        />
      </div>
    </motion.div>
  );
}

export default Loading;
