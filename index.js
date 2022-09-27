const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={`button ${className}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <div className="container">
      <h1 className="heading">Special Buttons</h1>
      <div className="cardContainer">
        <Button name="Like" className="likeButton" />
        <Button name="Comment" className="commentButton" />
        <Button name="Share" className="shareButton" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
