import React, { useContext } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { LanguageContext } from "../../contexts/LanguageContext";

const greetingTranslations = {
  fr: {
    subTitle:
      "Développeur et administrateur systèmes, je transforme les idées en solutions digitales robustes, sécurisées et évolutives. Découvrez mes réalisations et construisons ensemble vos projets.",
    hireMe: "⭐ Me contacter",
  },
  pt: {
    subTitle:
      "Desenvolvedor e administrador de sistemas, transformo ideias em soluções digitais robustas, seguras e escaláveis. Conheça os meus projetos e vamos construir juntos as suas ideias.",
    hireMe: "⭐ Entre em contacto",
  },
  en: {
    subTitle:
      "Developer and systems administrator, I transform ideas into robust, secure and scalable digital solutions. Discover my work and let's build your projects together.",
    hireMe: "⭐ Hire me",
  },
};

export default function Greeting(props) {
  const theme = props.theme;
  const { language } = useContext(LanguageContext);

  const translations =
    greetingTranslations[language] || greetingTranslations.fr;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>

              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}

              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {translations.subTitle}
              </p>

              <SocialMedia theme={theme} />

              <div className="portfolio-repo-btn-div">
                <Button
                  text={translations.hireMe}
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
