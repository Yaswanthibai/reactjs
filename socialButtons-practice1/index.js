const Button = (props) => {
  const{className,buttonText}=props;
  return(
    <button className={`button ${className}`} >{buttonText}</button>
  )
}

const element = (
  <div className="SocialContainer">
    <div className="ContentContiner">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttonsContainer">
      <Button className="button1" buttonText="Like"/>
      <Button className="button2" buttonText="Comment"/>
      <Button className="button3" buttonText="share"/>
      </div>
    </div>
  </div>
)


ReactDOM.render(element, document.getElementById('root'))