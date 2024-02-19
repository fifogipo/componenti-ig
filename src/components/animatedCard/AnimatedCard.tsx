import "./AnimatedCard.scss";

export const AnimatedCard = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="img-container">
            <img src="https://picsum.photos/300/300?random=1" />
          </div>
          <div className="content">
            <h2>
              John Doe <br />
              <span>Creative Designer</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img src="https://picsum.photos/300/300?random=2" />
          </div>
          <div className="content">
            <h2>
              John Doe <br />
              <span>Creative Designer</span>
            </h2>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img src="https://picsum.photos/300/300?random=3" />
          </div>
          <div className="content">
            <h2>
              John Doe <br />
              <span>Creative Designer</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
