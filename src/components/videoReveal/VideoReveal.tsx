import { useEffect, useRef } from "react";
import "./VideoReveal.scss";

export const VideoReveal = () => {
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const value = window.scrollY;
      bg.current!.style.backgroundSize = 100 + value * 2 + "px";
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <video autoPlay muted loop>
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div id="bg" ref={bg}></div>
        </div>
      </div>
    </>
  );
};
