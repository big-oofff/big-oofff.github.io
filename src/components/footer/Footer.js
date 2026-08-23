import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Built by {greeting.title} with React. Original template by{" "}\n          <a\n            href="https://github.com/ashutosh1919"\n            target="_blank"\n            rel="noopener noreferrer"\n          >\n            ashutosh1919\n          </a>\n          .
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
