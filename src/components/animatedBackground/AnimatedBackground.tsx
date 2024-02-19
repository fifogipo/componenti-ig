import './AnimatedBackground.scss'

export const AnimatedBackground = () => {
  return (
    <>
      <div className="container">
        <h1>Background with animated flares</h1>
        <div className="shape-container">
          <div id='shape-1'></div>
          <div id='shape-2'></div>
          <div id='shape-3'></div>
        </div>
      </div>
    </>
  );
};
