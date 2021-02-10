import gymImage from "../images/gym.png";
import bookImage from "../images/book.png";
import carPickerImage from "../images/picker.png";
import brochackiImage from "../images/brochacki.png";
import flappitImage from "../images/flapit.png";
import exchangeImage from "../images/exchange.png";
import bindly from "../images/bindly.png";

export const upSkills = {
  skills: [
    {
      id: 1,
      name: "HTML",
      level: "Good knowledge",
    },
    {
      id: 2,
      name: "CSS",
      level:
        "Good knowledge, I can create layout in Grid, Flexbox. I know the rules of RWD",
    },
    {
      id: 3,
      name: "Scss",
      level: "Good knowledge, I'm using this preprocesor in my daily work",
    },
    {
      id: 4,
      name: "Bootstrap",
      level: "Basic knowledge, created one or two projects in bootstrap",
    },
    {
      id: 5,
      name: "SQL",
      level: "Basic knowledge",
    },
  ],
};

export const downSkills = {
  skills: [
    {
      id: 6,
      name: "JavaScript",
      level: "Good knowledge, ES6 features",
    },
    {
      id: 7,
      name: "React",
      level: "Good knowledge, I'm using React with Hooks",
    },
    {
      id: 8,
      name: "Redux",
      level: "Basic knowledge, currently learning",
    },
    {
      id: 9,
      name: "GatsbyJS",
      level: "Good knowledge",
    },
    {
      id: 10,
      name: "Node",
      level: "Basic knowledge. Once used with ExpressJS",
    },
    {
      id: 11,
      name: "Styled Components",
      level: "Good knowledge",
    },
  ],
};

export const projectsData = {
  projects: [
    {
      id: 13,
      title: "Brochacki",
      description: "Commercial project made for RendPro.",
      stack: "Gatsby, Styled Components, Strapi",
      image: brochackiImage,
      code: "",
      live: "https://brochacki.pl/",
    },
    {
      id: 14,
      title: "Bindly widget",
      description:
        "One of my commercial projects. I created styles for the Bindly widget in Scss and added some changes in js files.",
      stack: "Html, Scss, Js",
      image: bindly,
      code: "",
      live: "https://www.bindly.pl",
    },
    {
      id: 15,
      title: "Gym Instructor",
      description: "Template webiste made for practice.",
      stack: "GatsbyJS, GraphQl, SCSS",
      image: gymImage,
      code: "https://github.com/Skwlx/GymInstructorSite",
      live: "https://gyminstructor.netlify.app",
    },
    {
      id: 16,
      title: "BookApi",
      description: "Website made for searching books.",
      stack: "React, Google Books API, SCSS",
      image: bookImage,
      code: "https://github.com/Skwlx/BookApi",
      live: "https://skwlx.github.io/BookApi/",
    },
    {
      id: 17,
      title: "Car picker",
      description: "App made for recrutation process.",
      stack: "React, Redux, SCSS",
      image: carPickerImage,
      code: "https://github.com/Skwlx/CarPicker",
      live: "https://car-picker.netlify.app",
    },
    {
      id: 18,
      title: "Flappit",
      description:
        "My friend made this game, so I made a website for him (Just for fun project).",
      stack: "Html, CSS",
      image: flappitImage,
      code: "https://github.com/Skwlx/Flappit",
      live: "https://snakerrek.github.io/Flappit/",
    },
    {
      id: 19,
      title: "ExchangeApp",
      description: "Very simple API app, lets you check the currency rate.",
      stack: "React, SCSS, Javascript",
      image: exchangeImage,
      code: "https://github.com/Skwlx/ExchangeApp",
      live: "https://skwlx.github.io/ExchangeApp/",
    },
  ],
};
