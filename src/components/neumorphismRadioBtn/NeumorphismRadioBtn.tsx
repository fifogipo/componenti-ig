import "./NeumorphismRadioBtn.scss";

export const NeumorphismRadioBtn = () => {
  return (
    <>
      <div className="container">
        <label>
            <input type="radio" name="age"/>
            <img src="/accept.svg" alt="" />
        </label>
        <label>
            <input type="radio" name="age"/>
            <img src="/deny.svg" alt="" />
        </label>
      </div>
    </>
  );
};
