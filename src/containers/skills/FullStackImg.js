import React, { Component } from "react";

const publicPath = process.env.PUBLIC_URL;

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    const cardStyle = {
      backgroundColor: theme.compImgHighlight,
      borderColor: theme.imageHighlight,
    };

    return (
      <section
        className="berkeley-home-gallery"
        aria-label="My Berkeley debate tournament experience"
      >
        <figure
          className="berkeley-home-card berkeley-home-card-main"
          style={cardStyle}
        >
          <div className="berkeley-home-photo-grid">
            <div className="berkeley-home-photo-frame berkeley-home-photo-team">
              <img
                src={`${publicPath}/experience-images/berkeley-team.svg`}
                alt="Thomas with his debate team inside Dwinelle Hall at UC Berkeley"
              />
            </div>
            <div className="berkeley-home-photo-frame berkeley-home-photo-reset">
              <img
                src={`${publicPath}/experience-images/berkeley-between-rounds.svg`}
                alt="Thomas taking a lighthearted break between debate rounds at Berkeley"
                loading="lazy"
              />
            </div>
          </div>
          <figcaption>
            <strong style={{ color: theme.text }}>Our Berkeley team</strong>
            <span style={{ color: theme.secondaryText }}>
              Preparing together and adapting after every round made the
              tournament a true team effort.
            </span>
          </figcaption>
        </figure>

      </section>
    );
  }
}
