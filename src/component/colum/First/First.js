import React from "react";
import "./style.css";
function First() {
  return (
    <div className="koulch">
      <div className="tout">
        <img className="dora" src="./images/account.svg" />
        <div className="trois">
          <div className="lfouk">
            <p>Account</p>
            <p>new</p>
            <p>Featured</p>
          </div>
          <div className="lwast">
            <h3>Junior Frontend Developer</h3>
          </div>
          <div className="taht">
            <p>1d ago</p>
            <p>&#183;</p>
            <p>Part time</p>
            <p>&#183;</p>
            <p>USA only</p>
          </div>
        </div>
      </div>
      <div className="cote">
        <span>Python</span>
        <span>React</span>
        <span>Javascript</span>
        <span>Fullstack</span>
      </div>
    </div>
  );
}

export default First;
