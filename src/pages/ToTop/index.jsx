import React, { useEffect, useState } from "react";
import toTop from "../../assets/toTop.svg";
import "./toTop.css";

function ToTop() {
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOffsetTop(window.pageYOffset);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setOffsetTop(window.pageYOffset);
      });
    };
  }, []);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`toTop ${offsetTop < 100 && "hide"}`} onClick={handleToTop}>
      <img src={toTop} alt="toTop" />
    </div>
  );
}

export default ToTop;
