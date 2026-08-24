import React, { useState } from "react";

const publicPath = process.env.PUBLIC_URL;

const showcaseItems = [
  {
    title: "Desmos FFmpeg Animation",
    description: "An FFmpeg-assisted animation rendered frame by frame with Bézier curves.",
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
    href: "https://github.com/big-oofff/Desmos-Animations",
  },
  {
    title: "TIE Fighter Desmos Render",
    description: "A video converted into frames, retimed, and rendered in Desmos.",
    type: "video",
    src: "https://github.com/user-attachments/assets/6852923c-c3c6-47d5-af07-fac5f6eb8748",
    poster: `${publicPath}/project-images/desmos-renderer.png`,
    href: "https://github.com/big-oofff/Desmos-Animations",
  },
  {
    title: "Venator Desmos Render",
    description: "A longer FFmpeg-assisted animation experiment rendered as Desmos curves.",
    type: "video",
    src: "https://github.com/user-attachments/assets/ca53252e-fa93-4ed4-adbb-861dae18633d",
    poster: `${publicPath}/project-images/desmos-renderer.png`,
    href: "https://github.com/big-oofff/Desmos-Animations",
  },
  {
    title: "Mosaic Me",
    description: "A physical LEGO mosaic built from my color-matching and image-processing workflow.",
    type: "image",
    src: `${publicPath}/project-images/mosaic-physical.jpg`,
    href: "https://github.com/big-oofff/mosaic-me",
  },
  {
    title: "Spinning Teacup Model",
    description: "A visual, calculus-based model of rotational motion.",
    type: "image",
    src: `${publicPath}/project-images/spinning-teacup.jpg`,
    href: "https://github.com/big-oofff/spinning-teacup",
  },
  {
    title: "Hot-Air Balloon Model",
    description: "A visual model exploring buoyancy and motion.",
    type: "image",
    src: `${publicPath}/project-images/hot-air-balloon.jpg`,
    href: "https://github.com/big-oofff/hot-air-balloon",
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
