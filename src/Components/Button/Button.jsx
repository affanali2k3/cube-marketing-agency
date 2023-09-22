import React from "react";
import './Button.css';

export const Button = ({ mainText, subText, style}) => {

    return (
<button style={style} class="button-82-pushable" role="button">
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
    <p className="main-button-text">{mainText}</p>
    <p className="sub-button-text">{subText}</p>
  </span>
</button>    )


}