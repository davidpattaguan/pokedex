import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color, delay }) => (
  <ReactLoading
    type={type}
    color={color}
    delay={delay}
    height={667}
    width={375}
  />
);

export default Loading;
