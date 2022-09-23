const Notification = (props) => {
  //  Write your code here.
  <div className={props.className1}>{props.text}</div>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="messageContainer">
      <div class="box1">
        <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
        <span>fkldsjfdslkj</span>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
