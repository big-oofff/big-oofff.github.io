import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import ProgrammingShowcase from "./ProgrammingShowcase";

function OnlineResumeSpotlight({ theme }) {
  return (
    <section className="online-resume-home" aria-labelledby="online-resume-title">
      <Fade bottom duration={1200} distance="24px">
        <a
          className="online-resume-home-link"
          href="/gitprofile/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: theme.highlight }}
        >
          <div className="online-resume-home-visual">
            <img
              src={`${process.env.PUBLIC_URL}/project-images/online-resume-preview.svg`}
              alt="Preview of Thomas Xiao's online resume"
              loading="lazy"
            />
          </div>
          <div className="online-resume-home-copy">
            <p className="online-resume-eyebrow">A second way to explore my work</p>
            <h2 id="online-resume-title" style={{ color: theme.text }}>
              Online Resume
            </h2>
            <p style={{ color: theme.secondaryText }}>
              A compact, project-focused view of my research, technical stack,
              experience, and publications.
            </p>
            <span>Open online resume&nbsp; ↗</span>
          </div>
        </a>
      </Fade>
    </section>
  );
}

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  else if (props.fileName === "DesignImg")
    return <ProgrammingShowcase theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
        <OnlineResumeSpotlight theme={theme} />
      </div>
    );
  }
}

export default SkillSection;
