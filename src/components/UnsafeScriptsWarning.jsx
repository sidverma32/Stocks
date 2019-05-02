import React from "react";

const UnsafeScriptsWarning = props => {
  return (
    <div className="container stocks-loader">
      <div className="card-header">
        <div className="card-header-icon">
          <span className="loader" />
        </div>
        <div className="card-header-title">Loading...</div>
      </div>
      <div className="card">
        <div className="card-content">
          You need to click on &nbsp;<code>Load Unsafe Scripts</code>&nbsp; to
          proceed.
          <br /> Look for the &nbsp;<code>shield icon</code>&nbsp; on your
          browser's addreess bar. &#8679;
        </div>
      </div>
    </div>
  );
};

export default UnsafeScriptsWarning;
