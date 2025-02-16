/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};
 
//SEO Related settings
const seo = {
  title: "Patrick Vieira Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Patrick Vieira Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },  
}; 

//Home Page
const greeting = {
  title: "Patrick Vieira",
  logo_name: "Patrick Vieira",
  nickname: "Patrickvieira",
  subTitle:  
  "Bonjour, je m'appelle Patrick Vieira Gomes, un développeur Web passionné par la création de sites Web innovants et fonctionnels.",
  resumeLink:
    "https://drive.google.com/file/d/1ddfKuGSptFMVQcW80WkLRwvOHi145gzf/view?usp=drive_link",
  portfolio_repository: "https://github.com/Adromane",
  githubProfile: "https://github.com/Adromane",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Adromane",
  // linkedin: "https://www.linkedin.com/feed/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gmail: "ashutoshhathidara98@gmail.com",
  // twitter: "https://twitter.com/home",
  // instagram: "https://www.instagram.com/"

  {
    name: "Github",
    link: "https://github.com/Adromane",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/feed/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:vieirapatrik97@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/773657056",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#198754", // Reference https://simpleicons.org/?q=instagram
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];
 
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Développement de sites Web réactifs à l'aide de frameworks tels que Bootstrap.",
        "⚡ Capacité à travailler en équipe et à collaborer avec différents domaines.",
        "⚡ Optimisation du site Web pour améliorer la vitesse de chargement et l'expérience utilisateur.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        }, 
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: { 
            backgroundColor: "white",
            color: "#D00000",
          }, 
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",    
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Création d'un site Web réactif avec React-Redux",
        "⚡ Développement d'applications mobiles à l'aide de Flutter, React Native et d'applications Android solo à l'aide de Kotlin",
        "⚡Création du backend de l'application dans Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Expérience de travail sur plusieurs plates-formes cloud",
        "⚡ Hébergement et maintenance de sites Web sur des instances de machines virtuelles avec intégration de bases de données",
        "⚡ Déploiement de modèles d'apprentissage en profondeur sur le cloud à utiliser sur les appareils mobiles",
        "⚡ Mise en place de la base de données au serveur.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Concevoir une interface utilisateur très attrayante pour les applications mobiles et Web",
        "⚡ Personnaliser les conceptions de logo et créer des logos à partir de zéro",
        "⚡ Créer le flux des fonctionnalités de l'application pour optimiser l'expérience utilisateur",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// formation Page
const competitiveSites = {
  competitiveSites: [
    {
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Université Catholique de l'Afrique de l'Ouest (UCAO)",
      subtitle: "MASTER SPÉCIALISÉ EN INFORMATIQUE DE GESTION",
      logo_path: "1622120545040-removebg-preview.png",
      alt_name: "Institut Supérieur de Gestion Saint Michel",
      duration: "2022-2023",
      descriptions: [

        "⚡ J'ai étudié les sujets de base du génie logiciel comme les algorithmes, les SGBD, les systèmes d'exploitation, etc.",
        "⚡ En dehors de cela, j'ai suivi des cours sur les sciences de la programmation telles que HTM, CSS, Node js, React et Js, le cloud computing et le développement Front-end et Backend",
        "⚡ Systèmes de gestion de bases de données : SQL, Oracle, MySQL et Capacité à travailler en équipe et à collaborer avec différents domaines.",
      ],
      website_link: "https://www.st-michel.sn/",
    },
    {
      title: "Université Catholique de l'Afrique de l'Ouest (UCAO)",
      subtitle: "LICENCE PROFESSIONNELLE EN INFORMATIQUE DE GESTION",
      logo_path: "Université-logo.png",
      alt_name: "Institut Supérieur de Gestion Saint Michel",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ J'ai étudié les sujets de base du génie logiciel comme les algorithmes, les SGBD, les systèmes d'exploitation, etc.",
        "⚡ En dehors de cela, j'ai appris les aspects fondamentaux du domaine de l’informatique de gestion, le programme intègre les nouveaux contextes reliés aux domaines des affaires électroniques et l’organisation des entreprises en réseaux informatiques, la gestion spécialisée de bases de données et le développement de sites web.",
        "⚡ Développement et implémentation d'applications Web en utilisant HTML, CSS et JavaScript et Implémentation de fonctionnalités back-end en utilisant PHP et MySQL.",
      ],
      website_link: "https://www.st-michel.sn/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
      
      
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "",
    //   alt_name: "Stanford University",

    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Travail",
  description:
    "Mon apprentissage autodidacte m'a permis de maîtriser diverses technologies, notamment [liste des technologies ou outils pertinents]. Travailler de manière autonome m'a permis de développer une discipline personnelle, de résoudre des problèmes par moi-même et d'approfondir mon savoir-faire technique...",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Travail",
      work: true,
      experiences: [
        {
          title: "📸 Suivez-moi sur Instagram",
          company: "Instagram",
          company_url: "https://www.instagram.com",
          logo_path: "Instagram_logo.png", 
          duration: "June 2023 - actuelment",
          location: "Dakar",  
          description:
            "Sur mon Instagram, je partage mon parcours en développement web, réseaux et technologies, ainsi que des projets, astuces et moments inspirants. Rejoignez-moi pour découvrir mon univers et échanger autour de la tech !",
          color: "#0879bf",
        },
        {
          title: "🚀 Explorez mon GitHub",
          company: "Github",
          company_url: "https://github.com/Adromane",
          logo_path: "Instagram_logo.png", 
          duration: "June 2023 - actuelment",
          location: "Dakar",  
          description:
            "Sur mon GitHub, je partage mes réalisations en développement, allant d'applications web et scripts à des projets open-source. Vous y trouverez du code en [tes technologies principales : Node.js, Laravel, etc.], ainsi que des solutions innovantes et des collaborations.",
          color: "#0879bf",
        },
        {
          title: "Linkedin",
          company: "linkedin",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "Linkedin_logo.png",
          duration: "Nov 2019-actuelment",
          location: "Dakar",
          description:
            "Mon parcours professionnel se caractérise par [vos expériences marquantes], et je suis convaincu(e) que chaque défi est une opportunité d'apprendre et de grandir.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        // {
        //   title: "Machine Learning Intern",
        //   company: "TikTok Inc.",
        //   company_url: "https://www.tiktok.com/en/",
        //   logo_path: "tiktok_logo.png",
        //   duration: "May 2022 - Aug 2022",
        //   location: "San Francisco, USA",
        //   description:
        //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
        //   color: "#000000",
        // },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Mon apprentissage autodidacte m'a permis de maîtriser diverses technologies, notamment [liste des technologies ou outils pertinents]. Travailler de manière autonome m'a permis de développer une discipline personnelle, de résoudre des problèmes par moi-même et d'approfondir mon savoir-faire technique..",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projets Page
const projectsHeader = {
  title: "Projets",
  description:
    "Permettez-moi de vous présenter mon projet passionnant qui allie innovation, créativité et expertise technique. Mon projet vise à [objectif principal du projet], en utilisant [méthodes ou technologies spécifiques] pour apporter une solution unique et efficace.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description:
    "",
  avatar_image_path: "",
};

const publications = {
  data: [
    // {
    //   id: "",
    //   name: "",
    //   createdAt: "",
    //   description: "",
    //   url:
    //     "",
    // },
    // {
    //   id: "",
    //   name: "",
    //   createdAt: "",
    //   description: "",
    //   url:
    //     "",
    // },
    // {
    //   id: "",
    //   name: "",
    //   createdAt: "",
    //   description: "",
    //   url:
    //     "",
    // },
    // {
    //   id: "",
    //   name: "",
    //   createdAt: "",
    //   description: "",
    //   url:
    //     "",
    // },
    // {
    //   id: "",
    //   name: "",
    //   createdAt: "",
    //   description:"",
    //   url:
    //     "",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "patrick_vieira.png",
    description:
    "Je suis disponible sur presque tous les réseaux sociaux. Vous pouvez m'envoyer un message, je vous répondrai dans les 24 heures.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
     "Pour l'autonomisation fondamentale individuelle, j'aime écrire des leçons puissantes qui créent un impact sur chacun des lecteurs individuellement pour changer le cœur de leur personnage.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Fass Delorme, Dakar - SENEGAL",
    locality: "Kanodar",
    country: "SN",
    region: "Dakar",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/e7kpWNbWvgfK98t88",
  },
  phoneSection: {
    title: "Número de telefone",
    subtitle: "+221 77 365 70 56 / 77 508 88 30",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
