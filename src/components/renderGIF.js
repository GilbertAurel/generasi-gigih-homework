import React from "react";

const renderGIF = ({ title, url }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={url} alt="" />
    </div>
  );
};

export default renderGIF;
