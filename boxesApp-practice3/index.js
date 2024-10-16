const Box = (props) => {
  const { className, content1 } = props;
  return (
    <div className={`boxes ${className}`}>{content1}</div>
  )
};

const element = (
  <div className="Container">
    <div className="">
      <h1 className="heading" content="Boxes">
        Boxes
      </h1>
      </div>
      <div className="boxContainer">
        <div className="box1">
          <Box className="smallBox" content1="Small" />
        </div>
        <div className="box2">
          <Box className="smallBox" content1="Medium" />
        </div>
        <div className="box3">
          <Box className="smallBox" content1="Large" />
        </div>
      
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));