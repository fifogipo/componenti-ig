import "./App.scss";
import { AnimatedBackground } from "./components/animatedBackground/AnimatedBackground";
import { AnimatedBorder } from "./components/animatedBorder/AnimatedBorder";
import { AnimatedCard } from "./components/animatedCard/AnimatedCard";
import { AnimatedSwitchBtn } from "./components/animatedSwitchBtn/AnimatedSwitchBtn";
import { AnimatedText } from "./components/animatedText/AnimatedText";
import { NeumorphismRadioBtn } from "./components/neumorphismRadioBtn/NeumorphismRadioBtn";
import { RippleEffectBtn } from "./components/rippleEffectBtn/RippleEffectBtn";
import { VideoReveal } from "./components/videoReveal/VideoReveal";
import { ExploreButton } from "./components/buttons/ExploreButton.tsx";
import { SocialButton } from "./components/buttons/SocialButton.tsx";
import { LogoutButton } from "./components/buttons/LogoutButton.tsx";
import { TrashButton } from "./components/buttons/TrashButton.tsx";

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
      {/*<AnimatedSwitchBtn />*/}
      {/*<ExploreButton />*/}
      {/*<SocialButton />*/}
      {/*<LogoutButton />*/}
      <TrashButton />
    </>
  );
}

export default App;
