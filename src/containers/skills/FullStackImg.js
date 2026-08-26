ıK®Ïí†‰š³š£üé®‡â•íh¥êÚ¶*'‹iz¹¢¶×ıK®Ïí†‰š³š£üé®‡â•ç!yÉ-ÆßÔ±êìşØh™«1‰ª?®ù¿±Êâ¦Û?®ù¶öŠ^­«b¢yè¶—«š+myÚlimport React, { Component } from "react";

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
          <figcaption style={{ color: theme.secondaryText }}>
            Me with my Berkeley debate tournament team, 2024
          </figcaption>
        </figure>
      </section>
    );
  }
}
