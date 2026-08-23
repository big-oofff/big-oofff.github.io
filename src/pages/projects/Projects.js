import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const featuredWork = [
  {
    title: "Climate Variability Research",
    label: "Research + scientific computing",
    description:
      "I used harmonic regression, Fourier analysis, wavelet decomposition, and change-point detection to study long-run NOAA climate records.",
    image: "/project-images/climate-forecast.png",
    imageAlt: "Forecasted climate anomaly chart from Thomas Xiao's research",
    url: "https://github.com/big-oofff/us-climate-harmonic-wavelet-analysis",
  },
  {
    title: "Desmos Bézier Renderer",
    label: "Python + JavaScript",
    description:
      "A workflow that turns images into animated Bézier-curve art in Desmos, combining image processing, curve fitting, and interactive rendering.",
    image: "/project-images/desmos-renderer.png",
    imageAlt: "Bézier-curve artwork rendered in Desmos",
    url: "https://github.com/big-oofff/DesmosBezierRenderer",
  },
];

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <section className="featured-work-section" aria-labelledby="featured-work-title">
          <Fade bottom duration={1600} distance="30px">
            <div>
              <h2 id="featured-work-title" style={{ color: theme.text }}>
                Featured Work
              </h2>
              <p className="featured-work-intro" style={{ color: theme.secondaryText }}>
                A closer look at two projects that bring together the math, research,
                and visual problem-solving I enjoy most.
              </p>
            </div>
          </Fade>
          <div className="featured-work-grid">
            {featuredWork.map((project) => (
              <Fade bottom duration={1600} distance="30px" key={project.title}>
                <a
                  className="featured-work-card"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: theme.highlight }}
                >
                  <div className="featured-work-image-wrap">
                    <img
                      src={`${process.env.PUBLIC_URL}${project.image}`}
                      alt={project.imageAlt}
                      loading="lazy"
                    />
                  </div>
                  <div className="featured-work-copy">
                    <span
                      className="featured-work-label"
                      style={{ color: theme.secondaryText }}
                    >
                      {project.label}
                    </span>
                    <h3 style={{ color: theme.text }}>{project.title}</h3>
                    <p style={{ color: theme.secondaryText }}>{project.description}</p>
                    <span className="featured-work-link" style={{ color: theme.text }}>
                      View project →
                    </span>
                  </div>
                </a>
              </Fade>
            ))}
          </div>
        </section>

        <h2 className="more-projects-heading" style={{ color: theme.text }}>
          More Projects on GitHub
        </h2>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard key={repo.id} repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard key={pub.id} pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
