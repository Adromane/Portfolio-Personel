import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  fr: {
    home: "Accueil",
    education: "Formation",
    experience: "Expérience",
    projects: "Projets",
    contact: "Contact",
  },

  pt: {
    home: "Início",
    education: "Formação",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contacto",
  },

  en: {
    home: "Home",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio-language") || "fr";
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("portfolio-language", newLanguage);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations.fr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
