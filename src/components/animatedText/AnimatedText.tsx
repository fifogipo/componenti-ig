import "./AnimatedText.scss";

export const AnimatedText = () => {
  const text = "Loading...";
  const style = (index: number) => {
    return { "--i": index } as React.CSSProperties
  };

  return (
    <>
      <div className="container">
        {text.split("").map((value, index) => (
          <span key={index + 1} style={style(index + 1)}>{value}</span>
        ))}
      </div>
    </>
  );
};

export default AnimatedText;