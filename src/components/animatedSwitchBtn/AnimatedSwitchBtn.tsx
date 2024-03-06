import { useState } from "react";
import "./AnimatedSwitchBtn.scss";

export const AnimatedSwitchBtn = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div className="container" data-ison={isOn}>
        <div className="switch-container" onClick={() => setIsOn(!isOn)}>
          <div className="switch" data-ison={isOn} />
        </div>
      </div>
    </>
  );
};
