import { useEffect, useRef } from "react";
import "./RippleEffectBtn.scss";

export const RippleEffectBtn = () => {
  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  const ripplesBtn = (event) => {
    buttonRefs.current.forEach((btn) => {
      const x = event.clientX - event.target!.offsetLeft;
      const y = event.clientY - event.target!.offsetTop;
      const ripples = document.createElement("span");

      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      btn.appendChild(ripples);
    });
  };
  return (
    <>
      <div className="container">
        <button ref={buttonRefs.current[0]} onClick={ripplesBtn} type="button">
          Button
        </button>
        <button ref={buttonRefs.current[1]} onClick={ripplesBtn} type="button">
          Button
        </button>
      </div>
    </>
  );
};
