import "./loading.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Loading({ onFinished }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(value + 1);
    }, 30);

    if (value >= 100) {
      clearTimeout(timerId);
      onFinished();
    }

    return () => clearTimeout(timerId);
  }, [value]);

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
          value={value + 10}
          maxValue={100}
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
