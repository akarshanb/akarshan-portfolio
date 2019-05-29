import React from "react";
// import Loader from 'react-loaders'
import "./homePage.scss";
// import 'loaders.css';

// let loader = <Loader type="pacman" />
let style = {
  textAlign: "center",
  height: "100%"
}

const HomePage = () => (
  <div className="homePage flex w100 h100">
    <div className='pageHeading'>
      <div>
        <span className="first-line">HELLO..</span>
      </div>
      <div>
        <span className="second-line">I AM AKARSHAN BANSAL</span>
      </div>
      <div>
        <span className="third-line">FULL STACK DEVELOPER</span>
      </div>
    </div>
    <div className="img-aboutme">

    </div>
    {/* <Loader type="pacman" className="flex w100" style={style} /> */}
  </div>
);

export default HomePage;
