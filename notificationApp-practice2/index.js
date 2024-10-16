const Notification = (props) => {
  const { className, Content } = props;
  return <div className={`message ${className}`}>{Content}</div>;
};

const element = (
  <div className="container">
    <Notification className="not" Content="Notifications" />
    <div className="notificationContainer">
      <div className="not1">
        <img
          src="https://img.icons8.com/pastel-glyph/128/checked--v1.png"
          alt="checked--v1"
        />
        <p>Information Message</p>
      </div>
      <div className="not2">
        <img
          src="https://img.icons8.com/pastel-glyph/128/checked--v1.png"
          alt="checked--v1"
        />
        <p>Success Message</p>
      </div>
      <div className="not3">
        <img
          src="https://img.icons8.com/metro/26/box-important.png"
          alt="box-important"
        />
        <p>Warning Message</p>
      </div>
      <div className="not4">
        <img
          src="https://img.icons8.com/metro/26/box-important.png"
          alt="box-important"
        />
        <p>Error Message</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));