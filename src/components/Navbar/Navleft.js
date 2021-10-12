import React, { Component } from "react";
/*import ellipse from "./ellipse.png";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin/2.svg";
import facebook from "../images/facebook.svg";
import youtube from "../images/youtube/1.svg";
import github from "../images/github.svg";*/

import "../../styles/Navleft.css";

export class Navleft extends Component {
  render() {
    return (
      <div className="NavleftItems">
        <div>
          {" "}
          <img className="nav-image" alt="Logo" src={require("../../images/assets/logo.png").default}/>
        </div>
        <div className="nav-text">
          MU
          <br />
          SSA
        </div>
        <div className="social-bar">
        <a href= ''><img  src={require("../../images/assets/fi_twitter.svg").default} className='links'></img></a>
        <a href= ''><img  src={require("../../images/assets/fi_linkedin.svg").default} className='links'></img></a>
        <a href= ''><img  src={require("../../images/assets/fi_facebook.svg").default} className='links'></img></a>
        <a href= ''><img  src={require("../../images/assets/fi_youtube.svg").default} className='links'></img></a>
        <a href= ''><img  src={require("../../images/assets/fi_github.svg").default} className='links'></img></a>
        </div>
      </div>
    );
  }
}

export default Navleft;
