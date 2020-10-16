import gymImage from "../images/gym.png";
import bookImage from "../images/book.png";
import restaurantImage from "../images/restaurant.png";
import carPickerImage from "../images/picker.png";
import flappitImage from "../images/flapit.png";
import tictactoeImage from "../images/tictactoe.png";
import exchangeImage from "../images/exchange.png";


export const upSkills = {
    skills: [
        {
            name: "HTML",
            level: "Good knowledge"
        },
        {
            name: "CSS",
            level: "I can create layout in Grid, Flexbox. I know the rules of RWD"
        },
        {
            name: "Scss",
            level: "I'm using this preprocesor in my daily work"
        },
        {
            name: "Bootstrap",
            level: "Basic knowledge, created one or two projects in bootstrap"
        },
        {
            name: "SQL",
            level: "Basic knowledge, currently learning"
        }
    ]
}

export const downSkills = {
    skills: [
        {
            name: "JavaScript",
            level: "Good knowledge, ES6 features"
        },
        {
            name: "React",
            level: "I'm using React with Hooks"
        },
        {
            name: "Redux",
            level: "Basic knowledge, currently learning"
        },
        {
            name: "Node",
            level: "Basic knowledge. Once used with ExpressJS"
        },
        {
            name: "Angular",
            level: "Currently learning"
        }
    ]
}

export const projectsData = {
    projects: [
        {
            title: "Gym Instructor",
            description: "Template webiste made for practice.",
            stack: "GatsbyJS, GraphQl, SCSS",
            image: gymImage,
            code: "https://github.com/Skwlx/GymInstructorSite",
            live: "https://gyminstructor.netlify.app"
        },
        {
            title: "BookApi",
            description: "Website made for searching books.",
            stack: "React, Google Books API, SCSS",
            image: bookImage,
            code: "https://github.com/Skwlx/BookApi",
            live: "https://skwlx.github.io/BookApi/"
        },
        {
            title: "Restaurant site",
            description: "I love mexican food so i made a website about mexican restaurant.",
            stack: "React, SCSS",
            image: restaurantImage,
            code: "https://github.com/Skwlx/RestaurantSite",
            live: "https://skwlx.github.io/RestaurantSite/"
        },
        {
            title: "Car picker",
            description: "App made for recrutation",
            stack: "React, Redux, SCSS",
            image: carPickerImage,
            code: "https://github.com/Skwlx/CarPicker",
            live: "https://car-picker.netlify.app"
        },
        {
            title: "Flappit",
            description: "My friend made this game, so I made a website for him (Just for fun project).",
            stack: "Html, CSS",
            image: flappitImage,
            code: "https://github.com/Skwlx/Flappit",
            live: "https://snakerrek.github.io/Flappit/"
        },
        {
            title: "Tictactoe",
            description: "My first ever project made, simple game.",
            stack: "Html, CSS, Javascript",
            image: tictactoeImage,
            code: "https://github.com/Skwlx/Tictactoe",
            live: "https://skwlx.github.io/Tictactoe/"
        },
        {
            title: "ExchangeApp",
            description: "Very simple API app, let's you check the currency rate.",
            stack: "React, SCSS, Javascript",
            image: exchangeImage,
            code: "https://github.com/Skwlx/ExchangeApp",
            live: "https://skwlx.github.io/ExchangeApp/"
        },
    ]
}