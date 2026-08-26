import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

function resolveLogo(logoPath) {
  if (!logoPath) return null;

  try {
    return require(`../../assets/images/${logoPath}`);
  } catch (error) {
    return null;
  }
}

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    const logo = resolveLogo(degree.logo_path);
    const isCmuLogo = degree.logo_path === "cmu.png";

    return (
      <div className="degree-card">
        {logo && (
          <Flip left duration={2000}>
            <div className={`card-img${isCmuLogo ? " card-img-cmu" : ""}`}>
              <img className="degree-logo" src={logo} alt={degree.alt_name} />
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div className="card-body" style={{ width: logo ? "90%" : "100%" }}>
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence, index) => {
                return (
                  <p
                    key={`${degree.title}-${index}`}
                    className="content-list"
                    style={{ color: theme.text }}
                  >
                    {sentence}
                  </p>
                );
              })}
              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
