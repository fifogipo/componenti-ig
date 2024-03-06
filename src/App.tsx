import "./App.scss";
import { AnimatedBackground } from "./components/animatedBackground/AnimatedBackground";
import { AnimatedBorder } from "./components/animatedBorder/AnimatedBorder";
import { AnimatedCard } from "./components/animatedCard/AnimatedCard";
import { AnimatedSwitchBtn } from "./components/animatedSwitchBtn/AnimatedSwitchBtn";
import { AnimatedText } from "./components/animatedText/AnimatedText";
import { NeumorphismRadioBtn } from "./components/neumorphismRadioBtn/NeumorphismRadioBtn";
import { RippleEffectBtn } from "./components/rippleEffectBtn/RippleEffectBtn";
import { VideoReveal } from "./components/videoReveal/VideoReveal";

function App() {
  return (
    <>
      {/* <AnimatedBorder /> */}
      {/* <AnimatedBackground /> */}
      {/* <AnimatedText /> */}
      {/* <AnimatedCard /> */}
      {/* <VideoReveal /> */}
      {/* //TODO: finisch rippleEffectBtn */}
      {/* <RippleEffectBtn /> */}
      <AnimatedSwitchBtn />
    </>
  );
}

export default App;
