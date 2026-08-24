import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const languageDetails = {
  Python: { icon: "fab fa-python" },
  JavaScript: { icon: "fab fa-js-square" },
  React: { icon: "fab fa-react" },
  HTML: { icon: "fab fa-html5" },
  CSS: { icon: "fab fa-css3-alt" },
  Markdown: { icon: "fab fa-markdown" },
  LaTeX: { glyph: "TeX" },
  Dart: { glyph: "D" },
  "Jupyter Notebook": { glyph: "J" },
};

const featuredWork = [
  {
    title: "U.S. Climate Variability",
    type: "Independent Research Paper",
    description:
      "Analyzed NOAA records from 1895–2024 with harmonic regression, Fourier analysis, wavelets, and change-point detection.",
    image: "/project-images/climate-forecast.png",
    imageAlt: "Forecasted climate anomaly chart from Thomas Xiao's research",
    languages: ["Python", "LaTeX"],
    paperUrl:
      "https://github.com/big-oofff/us-climate-harmonic-wavelet-analysis/blob/main/finalpaper.pdf",
    repoUrl:
      "https://github.com/big-oofff/us-climate-harmonic-wavelet-analysis",
  },
  {
    title: "Board Game Sales Analysis",
    type: "USC Marshall Research",
    description:
      "Studied how ratings, complexity, play time, and other gameplay variables relate to sales and consumer response in BoardGameGeek data.",
    image: "/project-images/board-game-paper.png",
    imageAlt:
      "Correlation heatmap from Thomas Xiao's BoardGameGeek research paper",
    languages: ["LaTeX"],
    paperUrl:
      "https://github.com/big-oofff/board-game-analysis/blob/main/compiledanalysis.pdf",
    repoUrl: "https://github.com/big-oofff/board-game-analysis",
  },
  {
    title: "M3 Challenge Model",
    type: "Competition Paper",
    description:
      "Modeled urban heat, power demand, and community vulnerability for the 2025 MathWorks Math Modeling Challenge.",
    image: "/project-images/m3-paper.jpg",
    imageAlt: "Correlation heatmap from the 2025 M3 Challenge model",
    languages: ["Python", "LaTeX"],
    paperUrl:
      "https://github.com/big-oofff/m3-paper/blob/main/m3_latex_solution_2025%20(1).pdf",
    repoUrl: "https://github.com/big-oofff/m3-paper",
  },
  {
    title: "HiMCM Mathematical Model",
    type: "Honorable Mention Paper",
    description:
      "Built and communicated a team mathematical model that earned Honorable Mention in the international HiMCM competition.",
    image: "/project-images/himcm-paper.jpg",
    imageAlt:
      "Emissions comparison figure from Thomas Xiao's HiMCM paper",
    languages: ["LaTeX"],
    paperUrl: "https://github.com/big-oofff/himcm/blob/main/himcmpaper.pdf",
    repoUrl: "https://github.com/big-oofff/himcm",
  },
  {
    title: "What Drives Soccer Wins?",
    type: "Statistical Analysis",
    description:
      "Used multi-season team data to examine how two performance variables relate to soccer wins from 2008–2016.",
    image: "/project-images/soccer-wins.jpg",
    imageAlt: "Soccer regression analysis visualization",
    languages: ["Python", "LaTeX"],
    paperUrl:
      "https://github.com/big-oofff/soccer-wins/blob/main/compiledanalysis.pdf",
    repoUrl: "https://github.com/big-oofff/soccer-wins",
  },
  {
    title: "Airfoil Analysis and Redesign",
    type: "Applied Mathematics Paper",
    description:
      "Applied multivariable calculus and numerical analysis to examine airfoil geometry, pressure, velocity, and lift.",
    image: "/project-images/airfoil.jpg",
    imageAlt: "Airfoil redesign and lift visualization",
    languages: ["Python", "LaTeX"],
    paperUrl:
      "https://github.com/big-oofff/airfoil/blob/main/compiledanalysis.pdf",
    repoUrl: "https://github.com/big-oofff/airfoil",
  },
  {
    title: "Hot-Air Balloon Model",
    type: "Applied Mathematics Paper",
    description:
      "Modeled balloon geometry, volume, thermal behavior, and lift in a written mathematical analysis.",
    image: "/project-images/hot-air-balloon.jpg",
    imageAlt: "Hot-air balloon geometry and lift analysis",
    languages: ["LaTeX"],
    paperUrl:
      "https://github.com/big-oofff/hot-air-balloon/blob/main/compiledanalysis.pdf",
    repoUrl: "https://github.com/big-oofff/hot-air-balloon",
  },
  {
    title: "Spinning Teacup Ride",
    type: "Mathematical Modeling Paper",
    description:
      "Analyzed the motion and geometry of a spinning teacup ride through a concise mathematical model.",
    image: "/project-images/spinning-teacup.jpg",
    imageAlt: "Spinning teacup ride mathematical analysis",
    languages: ["LaTeX"],
    paperUrl:
      "https://github.com/big-oofff/spinning-teacup/blob/main/compiledanalysis.pdf",
    repoUrl: "https://github.com/big-oofff/spinning-teacup",
  },
];

const moreProjects = [
  {
    title: "Portfolio Website",
    type: "Web Development",
    description:
      "A responsive React portfolio that brings together my research, projects, resume, and professional links in one place.",
    imageAlt: "Source preview from Thomas Xiao's React portfolio website",
    codeLabel: "src/pages/projects/Projects.js",
    codeLines: [
      "<div className=\"portfolio-project-grid featured-grid\">",
      "  {featuredWork.map((project) => (",
      "    <ProjectCard",
      "      project={project}",
      "      theme={theme}",
      "      paper={true}",
      "    />",
      "  ))}",
      "</div>",
    ],
    languages: ["React", "JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/big-oofff/big-oofff.github.io",
    liveUrl: "https://thomasxiao.org/",
  },
  {
    title: "GitProfile Online Resume",
    type: "Online Resume + Open-Source Customization",
    description:
      "A focused online resume built from the GitProfile format and customized around my research, experience, technical stack, and selected projects.",
    imageAlt: "Source preview from Thomas Xiao's GitProfile online resume",
    codeLabel: "public/gitprofile/index.html",
    codeLines: [
      "<title>Thomas's Online Resume</title>",
      "",
      "<h1>Thomas Xiao</h1>",
      "<p class=\"tagline\">Applied Math @ CMU</p>",
      "",
      "<h2>Selected GitHub Projects</h2>",
    ],
    languages: ["HTML", "CSS", "JavaScript"],
    repoUrl:
      "https://github.com/big-oofff/big-oofff.github.io/tree/master/public/gitprofile",
    liveUrl: "https://thomasxiao.org/gitprofile/",
    templateUrl: "https://github.com/arifszn/gitprofile",
  },
  {
    title: "Desmos Animations",
    type: "Animation Collection",
    description:
      "A collection of image and video animations produced with the Bézier renderer, Desmos, and an FFmpeg workflow.",
    video:
      "https://raw.githubusercontent.com/big-oofff/Desmos-Animations/main/venator.mp4",
    imageAlt: "Venator animation rendered with Bézier curves in Desmos",
    languages: ["Markdown"],
    repoUrl: "https://github.com/big-oofff/Desmos-Animations",
  },
  {
    title: "Mosaic Me",
    type: "Interactive Image Tool",
    description:
      "A Streamlit app that turns uploaded images into LEGO-style mosaics, building instructions, legends, and shopping lists.",
    image:
      "https://raw.githubusercontent.com/big-oofff/mosaic-me/main/example1.png",
    imageAlt: "LEGO-style image mosaic generated by Mosaic Me",
    languages: ["Python", "Jupyter Notebook"],
    repoUrl: "https://github.com/big-oofff/mosaic-me",
    liveUrl: "https://mosaic-me.streamlit.app",
  },
  {
    title: "Python Games and School Projects",
    type: "Programming Collection",
    description:
      "A growing collection of small Python programs, including tic-tac-toe, Hangman, sliding puzzles, ciphers, and utilities.",
    imageAlt: "Source preview from the tic-tac-toe game",
    codeLabel: "tictactoe.py",
    codeLines: [
      "def display_board(board):",
      "    print(f\"\"\"",
      "     {board[0]} | {board[1]} | {board[2]}",
      "    -----------",
      "     {board[3]} | {board[4]} | {board[5]}",
      "    -----------",
      "     {board[6]} | {board[7]} | {board[8]}",
      "    \"\"\")",
    ],
    languages: ["Python"],
    repoUrl: "https://github.com/big-oofff/school-projects",
  },
  {
    title: "Tetris Web App",
    type: "Game Prototype",
    description:
      "A lightweight browser-based Tetris project built as an early experiment with Dart's web tooling.",
    imageAlt: "Source preview from the Tetris web application",
    codeLabel: "web/index.html",
    codeLines: [
      "<title>tetris</title>",
      "<link rel=\"stylesheet\" href=\"styles.css\">",
      "<script defer src=\"main.dart.js\"></script>",
      "",
      "<body>",
      "  <div id=\"output\"></div>",
      "</body>",
    ],
    languages: ["Dart"],
    repoUrl: "https://github.com/big-oofff/tetris",
  },
  {
    title: "Clash Royale API Experiments",
    type: "API Exploration",
    description:
      "Small Python scripts for requesting Clash Royale card data and parsing player-response JSON.",
    imageAlt: "Source preview from the Clash Royale player-data script",
    codeLabel: "jsonplayerresponse.py",
    codeLines: [
      "response = requests.get(url, headers=headers)",
      "data = json.loads(response.text)",
      "",
      "trophies = data['trophies']",
      "clan_name = data['clan']['name']",
      "",
      "print(f'Player has {trophies} trophies')",
    ],
    languages: ["Python"],
    repoUrl: "https://github.com/big-oofff/clashai",
  },
];

function imageSource(image) {
  return image.indexOf("http") === 0
    ? image
    : `${process.env.PUBLIC_URL}${image}`;
}

function LanguageBadge({ language }) {
  const details = languageDetails[language] || { glyph: "•" };
  return (
    <span className="language-badge" title={language}>
      {details.icon ? (
        <i className={details.icon} aria-hidden="true"></i>
      ) : (
        <span className="language-glyph" aria-hidden="true">
          {details.glyph}
        </span>
      )}
      <span>{language}</span>
    </span>
  );
}

function ProjectVisual({ project }) {
  let visual;

  if (project.video) {
    visual = (
      <video
        src={project.video}
        aria-label={project.imageAlt}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      />
    );
  } else if (project.codeLines) {
    visual = (
      <div className="project-code-snapshot" role="img" aria-label={project.imageAlt}>
        <div className="code-snapshot-header">
          <span className="code-window-dots" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <span>{project.codeLabel}</span>
        </div>
        <pre>
          <code>{project.codeLines.join("\n")}</code>
        </pre>
      </div>
    );
  } else {
    visual = (
      <img
        src={imageSource(project.image)}
        alt={project.imageAlt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    );
  }

  return (
    <div
      className={`portfolio-project-image ${
        project.codeLines ? "code-project-image" : ""
      }`}
    >
      {visual}
      <span className="project-type-label">{project.type}</span>
    </div>
  );
}

function ProjectCard({ project, theme, paper }) {
  return (
    <article
      className={`portfolio-project-card ${paper ? "paper-card" : "build-card"}`}
      style={{ backgroundColor: theme.highlight }}
    >
      <ProjectVisual project={project} />
      <div className="portfolio-project-copy">
        <h3 style={{ color: theme.text }}>{project.title}</h3>
        <p style={{ color: theme.secondaryText }}>{project.description}</p>
        <div className="language-list" aria-label="Languages and tools">
          {project.languages.map((language) => (
            <LanguageBadge key={language} language={language} />
          ))}
        </div>
        <div className="project-actions">
          {project.paperUrl ? (
            <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
              Read paper <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live demo <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.templateUrl ? (
            <a href={project.templateUrl} target="_blank" rel="noopener noreferrer">
              Original template <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />

        <div className="basic-projects">
          <Fade bottom duration={1600} distance="30px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <p className="projects-eyebrow">Research · Modeling · Code</p>
                <h1 className="projects-heading-text" style={{ color: theme.text }}>
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Papers, models, and programs I have built while following questions
                  that interested me.
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <main className="project-catalog">
          <section className="portfolio-section" aria-labelledby="featured-work-title">
            <Fade bottom duration={1200} distance="24px">
              <header className="portfolio-section-header">
                <div>
                  <p className="section-kicker">Research and mathematical modeling</p>
                  <h2 id="featured-work-title" style={{ color: theme.text }}>
                    Featured Work
                  </h2>
                  <p style={{ color: theme.secondaryText }}>
                    Complete papers and analytical projects, with code and source files
                    linked where available.
                  </p>
                </div>
                <span className="project-count">{featuredWork.length} projects</span>
              </header>
            </Fade>
            <div className="portfolio-project-grid featured-grid">
              {featuredWork.map((project) => (
                <Fade bottom duration={1200} distance="24px" key={project.title}>
                  <ProjectCard project={project} theme={theme} paper={true} />
                </Fade>
              ))}
            </div>
          </section>

          <section className="portfolio-section more-things-section" aria-labelledby="more-things-title">
            <Fade bottom duration={1200} distance="24px">
              <header className="portfolio-section-header">
                <div>
                  <p className="section-kicker">Experiments, tools, and creative builds</p>
                  <h2 id="more-things-title" style={{ color: theme.text }}>
                    A Few More Things
                  </h2>
                  <p style={{ color: theme.secondaryText }}>
                    Smaller projects I made for school, competitions, or because they
                    sounded fun to build.
                  </p>
                </div>
                <span className="project-count">{moreProjects.length} projects</span>
              </header>
            </Fade>
            <div className="portfolio-project-grid more-project-grid">
              {moreProjects.map((project) => (
                <Fade bottom duration={1200} distance="24px" key={project.title}>
                  <ProjectCard project={project} theme={theme} paper={false} />
                </Fade>
              ))}
            </div>
          </section>

          <div className="all-repositories-link">
            <a
              href="https://github.com/big-oofff?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all repositories on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </main>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
