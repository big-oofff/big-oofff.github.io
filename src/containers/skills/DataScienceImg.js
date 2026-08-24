import React, { Component } from "react";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <figure
        className="math-team-figure"
        style={{
          backgroundColor: theme.compImgHighlight,
          borderColor: theme.imageHighlight,
        }}
      >
        <img
          className="math-team-photo"
          src={`${process.env.PUBLIC_URL}/images/math-club-team-2025-2026.jpg`}
          alt="Thomas Xiao with his math club team during the 2025–2026 school year"
        />
        <figcaption className="math-team-caption" style={{ color: theme.text }}>
          <span
            className="math-team-caption-dot"
            style={{ backgroundColor: theme.imageHighlight }}
            aria-hidden="true"
          ></span>
          Me with my math club team, 2025–2026.
        </figcaption>
      </figure>
    );
  }
}
