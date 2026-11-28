import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  fr: {
    home: "Accueil",
    education: "Formation",
    experience: "Expérience",
    projects: "Projets",
    contact: "Contact",

    skill_0_title: "Data Science & Intelligence Artificielle",
    skill_0_desc_0:
      "⚡ Développement de sites Web réactifs à l'aide de frameworks tels que Bootstrap.",
    skill_0_desc_1:
      "⚡ Capacité à travailler en équipe et à collaborer avec différents domaines.",
    skill_0_desc_2:
      "⚡ Optimisation des sites Web pour améliorer la vitesse de chargement et l'expérience utilisateur.",

    skill_1_title: "Développement Full Stack",
    skill_1_desc_0: "⚡ Création de sites Web réactifs avec React et Redux.",
    skill_1_desc_1:
      "⚡ Développement d'applications mobiles avec Flutter, React Native et Kotlin.",
    skill_1_desc_2:
      "⚡ Développement du backend avec Node.js, Express et Flask.",

    skill_2_title: "Architecture Cloud et Infrastructure",
    skill_2_desc_0: "⚡ Expérience de travail sur plusieurs plateformes Cloud.",
    skill_2_desc_1:
      "⚡ Hébergement et maintenance de sites Web sur des machines virtuelles avec intégration de bases de données.",
    skill_2_desc_2:
      "⚡ Déploiement de modèles d'apprentissage profond dans le Cloud pour les appareils mobiles.",
    skill_2_desc_3: "⚡ Mise en place de bases de données sur serveur.",

    skill_3_title: "Conception UI/UX",
    skill_3_desc_0:
      "⚡ Conception d'interfaces utilisateur attrayantes pour les applications mobiles et Web.",
    skill_3_desc_1: "⚡ Personnalisation et création de logos.",
    skill_3_desc_2:
      "⚡ Création de parcours fonctionnels pour optimiser l'expérience utilisateur.",
  },
  pt: {
    home: "Início",
    education: "Formação",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contacto",

    skill_0_title: "Ciência de Dados e Inteligência Artificial",
    skill_0_desc_0:
      "⚡ Desenvolvimento de sites Web responsivos utilizando frameworks como Bootstrap.",
    skill_0_desc_1:
      "⚡ Capacidade de trabalhar em equipa e colaborar com diferentes áreas.",
    skill_0_desc_2:
      "⚡ Otimização de sites Web para melhorar a velocidade de carregamento e a experiência do utilizador.",

    skill_1_title: "Desenvolvimento Full Stack",
    skill_1_desc_0: "⚡ Criação de sites Web responsivos com React e Redux.",
    skill_1_desc_1:
      "⚡ Desenvolvimento de aplicações móveis com Flutter, React Native e Kotlin.",
    skill_1_desc_2:
      "⚡ Desenvolvimento do backend com Node.js, Express e Flask.",

    skill_2_title: "Arquitetura Cloud e Infraestrutura",
    skill_2_desc_0: "⚡ Experiência de trabalho com várias plataformas Cloud.",
    skill_2_desc_1:
      "⚡ Alojamento e manutenção de sites Web em máquinas virtuais com integração de bases de dados.",
    skill_2_desc_2:
      "⚡ Implementação de modelos de aprendizagem profunda na Cloud para dispositivos móveis.",
    skill_2_desc_3: "⚡ Implementação de bases de dados em servidores.",

    skill_3_title: "Design UI/UX",
    skill_3_desc_0:
      "⚡ Conceção de interfaces de utilizador atrativas para aplicações móveis e Web.",
    skill_3_desc_1: "⚡ Personalização e criação de logótipos.",
    skill_3_desc_2:
      "⚡ Criação de fluxos funcionais para otimizar a experiência do utilizador.",
  },

  en: {
    home: "Home",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",

    skill_0_title: "Data Science & Artificial Intelligence",
    skill_0_desc_0:
      "⚡ Development of responsive websites using frameworks such as Bootstrap.",
    skill_0_desc_1:
      "⚡ Ability to work in teams and collaborate across different fields.",
    skill_0_desc_2:
      "⚡ Website optimization to improve loading speed and user experience.",

    skill_1_title: "Full Stack Development",
    skill_1_desc_0: "⚡ Creation of responsive websites using React and Redux.",
    skill_1_desc_1:
      "⚡ Development of mobile applications using Flutter, React Native and Kotlin.",
    skill_1_desc_2: "⚡ Backend development using Node.js, Express and Flask.",

    skill_2_title: "Cloud Architecture & Infrastructure",
    skill_2_desc_0: "⚡ Experience working with multiple Cloud platforms.",
    skill_2_desc_1:
      "⚡ Hosting and maintenance of websites on virtual machines with database integration.",
    skill_2_desc_2:
      "⚡ Deployment of deep learning models in the Cloud for mobile devices.",
    skill_2_desc_3: "⚡ Database implementation on servers.",

    skill_3_title: "UI/UX Design",
    skill_3_desc_0:
      "⚡ Designing attractive user interfaces for mobile and Web applications.",
    skill_3_desc_1: "⚡ Customization and creation of logos.",
    skill_3_desc_2:
      "⚡ Creating application workflows to optimize user experience.",
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
