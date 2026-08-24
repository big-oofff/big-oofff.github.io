import React, { Component } from "react";

const publicPath = process.env.PUBLIC_URL;

export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;

    const cardStyle = {
      backgroundColor: theme.compImgHighlight,
      borderColor: theme.imageHighlight,
    };

    return (
      <section
        className="berkeley-gallery"
        aria-label="Photos from my Berkeley debate experience"
      >
        <figure className="berkeley-photo-card" style={cardStyle}>
          <img
            className="berkeley-photo berkeley-team-photo"
            src={`${publicPath}/experience-images/berkeley-team.svg`}
            alt="Thomas with his debate team inside Dwinelle Hall at UC Berkeley"
          />
          <figcaption className="berkeley-photo-caption">
            <span
              className="berkeley-caption-number"
              style={{ color: theme.imageHighlight }}
            >
              01
            </span>
            <span>
              <strong style={{ color: theme.text }}>Our Berkeley team</strong>
              <span style={{ color: theme.secondaryText }}>
                With my debate team at UC Berkeley. We prepared together,
                adapted after each round, and supported one another through a
                demanding tournament schedule.
              </span>
            </span>
          </figcaption>
        </figure>

        <figure
          className="berkeley-photo-card berkeley-photo-card-candid"
          style={cardStyle}
        >
          <img
            className="berkeley-photo berkeley-candid-photo"
            src={`${publicPath}/experience-images/berkeley-between-rounds.svg`}
            alt="Thomas taking a lighthearted break between debate rounds at Berkeley"
            loading="lazy"
          />
          <figcaption className="berkeley-photo-caption">
            <span
              className="berkeley-caption-number"
              style={{ color: theme.imageHighlight }}
            >
              02
            </span>
            <span>
              <strong style={{ color: theme.text }}>Between rounds</strong>
              <span style={{ color: theme.secondaryText }}>
                A candid reset during the Berkeley tournament. The experience
                taught me to stay composed, recover quickly, and keep a long
                competition day enjoyable.
              </span>
            </span>
          </figcaption>
        </figure>
      </section>
    );
  }
}
