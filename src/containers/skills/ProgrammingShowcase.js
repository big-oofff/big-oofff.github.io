import React, { useState } from "react";

const publicPath = process.env.PUBLIC_URL;

const showcaseItems = [
  {
    title: "Programming Portfolio",
    description: "A quick look across my research, visualization, and creative-coding projects.",
    type: "image",
    src: `${publicPath}/images/programming-project-collage.png`,
    href: "/projects",
  },
  {
    title: "Climate Variability Research",
    description: "Forecast visualization from my U.S. climate analysis.",
    type: "image",
    src: `${publicPath}/project-images/climate-forecast.png`,
    href: "https://github.com/big-oofff/us-climate-harmonic-wavelet-analysis",
  },
  {
    title: "Board Game Consumer Research",
    description: "A correlation heatmap from my BoardGameGeek research.",
    type: "image",
    src: `${publicPath}/project-images/board-game-paper.png`,
    href: "https://github.com/big-oofff/board-game-analysis",
  },
  {
    title: "M3 Challenge Model",
    description: "One of the figures from our urban heat and power-demand model.",
    type: "image",
    src: `${publicPath}/project-images/m3-paper.jpg`,
    href: "https://github.com/big-oofff/m3-paper",
  },
  {
    title: "Mosaic Me",
    description: "The physical LEGO mosaic produced from my extended image-processing workflow.",
    type: "image",
    src: `${publicPath}/project-images/mosaic-physical.jpg`,
    href: "https://github.com/big-oofff/mosaic-me",
  },
  {
    title: "Airfoil Analysis",
    description: "A figure from my numerical and multivariable-calculus airfoil analysis.",
    type: "image",
    src: `${publicPath}/project-images/airfoil.jpg`,
    href: "https://github.com/big-oofff/airfoil",
  },
  {
    title: "Soccer Wins Analysis",
    description: "A statistical look at the variables associated with match outcomes.",
    type: "image",
    src: `${publicPath}/project-images/soccer-wins.jpg`,
    href: "https://github.com/big-oofff/soccer-wins",
  },
  {
    title: "Spinning Teacup Model",
    description: "A calculus-based model of rotational motion.",
    type: "image",
    src: `${publicPath}/project-images/spinning-teacup.jpg`,
    href: "https://github.com/big-oofff/spinning-teacup",
  },
  {
    title: "Hot-Air Balloon Model",
    description: "A visual from my buoyancy and motion analysis.",
    type: "image",
    src: `${publicPath}/project-images/hot-air-balloon.jpg`,
    href: "https://github.com/big-oofff/hot-air-balloon",
  },
  {
    title: "Desmos FFmpeg Animation",
    description: "Video frames extracted with FFmpeg and rendered as Bézier curves in Desmos.",
    type: "video",
    src: "https://github.com/user-attachments/assets/27ff7aa9-3f17-44bc-93db-a0c32bd37503",
    poster: `${publicPath}/project-images/desmos-renderer.png`,
    href: "https://github.com/big-oofff/Desmos-Animations",
  },
  {
    title: "D4DJ Desmos Render",
    description: "A processed animation from my FFmpeg-to-Desmos workflow.",
    type: "video",
    src: "https://github.com/user-attachments/assets/9162eab0-5a35-4fe1-a684-9526ebcbb94d",
    poster: `${publicPath}/project-images/desmos-renderer.png`,
    href: "https://github.com/big-oofff/Desmos-Animations/blob/main/d4dj.md",
  },
  {
    title: "TIE Fighter Desmos Render",
    description: "Another video converted into frames, retimed, and rendered in Desmos.",
    type: "video",
    src: "https://github.com/user-attachments/assets/6852923c-c3c6-47d5-af07-fac5f6eb8748",
    poster: `${publicPath}/project-images/desmos-renderer.png`,
    href: "https://github.com/big-oofff/Desmos-Animations/blob/main/tiefighter.md",
  },
  {
    title: "Venator Desmos Render",
    description: "A longer FFmpeg-assisted animation experiment rendered as Desmos curves.",
    type: "video",
    src: "https://github.com/user-attachments/assets/ca53252e-fa93-4ed4-adbb-861dae18633d",
    poster: `${publicPath}/project-images/desmos-renderer.png`,
    href: "https://github.com/big-oofff/Desmos-Animations/blob/main/venator.md",
  },
  {
    title: "Desmos Animation GIF",
    description: "A short looping result from the same animation workflow.",
    type: "image",
    src: "https://github.com/user-attachments/assets/7cb25321-8ccc-4a9b-841d-5b2624cf85a9",
    href: "https://github.com/big-oofff/Desmos-Animations/blob/main/jc.md",
  },
];

export default function ProgrammingShowcase({ theme }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = showcaseItems[activeIndex];

  const move = direction => {
    setActiveIndex(
      current =>
        (current + direction + showcaseItems.length) % showcaseItems.length,
    );
  };

  const handleKeyDown = event => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  };

  const renderMedia = item => {
    if (item.type === "video") {
      return (
        <video
          key={item.src}
          className="programming-showcase-media"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          poster={item.poster}
          aria-label={item.title}
        >
          <source src={item.src} />
          Your browser does not support embedded video.
        </video>
      );
    }

    return (
      <img
        key={item.src}
        className="programming-showcase-media"
        src={item.src}
        alt={item.title}
      />
    );
  };

  return (
    <section
      className="programming-showcase"
      style={{
        backgroundColor: theme.compImgHighlight,
        borderColor: theme.imageHighlight,
        color: theme.text,
      }}
      aria-label="Interactive programming project showcase"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <div className="programming-showcase-frame">
        {renderMedia(activeItem)}
        <button
          className="programming-showcase-nav programming-showcase-nav-left"
          type="button"
          onClick={() => move(-1)}
          aria-label="Show previous project"
        >
          ‹
        </button>
        <button
          className="programming-showcase-nav programming-showcase-nav-right"
          type="button"
          onClick={() => move(1)}
          aria-label="Show next project"
        >
          ›
        </button>
      </div>

      <div className="programming-showcase-details">
        <div>
          <h2>{activeItem.title}</h2>
          <p style={{ color: theme.secondaryText }}>{activeItem.description}</p>
        </div>
        <div className="programming-showcase-meta">
          <span>
            {activeIndex + 1} / {showcaseItems.length}
          </span>
          <a
            href={activeItem.href}
            target={activeItem.href.startsWith("http") ? "_blank" : undefined}
            rel={activeItem.href.startsWith("http") ? "noreferrer" : undefined}
            style={{ color: theme.imageHighlight }}
          >
            View project ↗
          </a>
        </div>
      </div>

      <div
        className="programming-showcase-strip"
        role="tablist"
        aria-label="Choose a project"
      >
        {showcaseItems.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show ${item.title}`}
            className={`programming-showcase-thumb${
              index === activeIndex ? " is-active" : ""
            }`}
            style={{
              borderColor:
                index === activeIndex ? theme.imageHighlight : "transparent",
            }}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={item.type === "video" ? item.poster : item.src}
              alt=""
              loading="lazy"
            />
            {item.type === "video" && (
              <span className="programming-showcase-play" aria-hidden="true">
                ▶
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
