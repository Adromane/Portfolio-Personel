import React, { useContext } from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { LanguageContext } from "../../contexts/LanguageContext";

const skillsTranslations = {
  fr: {
    title: "Ce que je fais ?",
  },
  pt: {
    title: "O que faço?",
  },
  en: {
    title: "What I do?",
  },
};

export default function Skills(props) {
  const theme = props.theme;
  const { language } = useContext(LanguageContext);

  const translations = skillsTranslations[language] || skillsTranslations.fr;

  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            {translations.title}
          </h1>
        </Fade>
      </div>

      <SkillSection theme={theme} />
    </div>
  );
}
