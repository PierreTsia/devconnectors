import spinner from "./spinner.gif";
import React from "react";

export default () => {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "250px", margin: "auto", display: "block" }}
    />
  );
};
