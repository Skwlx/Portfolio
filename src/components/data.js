import gymImage from '../images/gym.png';
import bookImage from '../images/book.png';
import carPickerImage from '../images/picker.png';
import brochackiImage from '../images/brochacki.png';
import melodyParkImage from '../images/melodypark.png';
import bindly from '../images/bindly.png';

export const upSkills = {
  skills: [
    {
      id: 1,
      name: 'HTML',
      level: 'Good knowledge',
    },
    {
      id: 2,
      name: 'CSS',
      level: 'Good knowledge',
    },
    {
      id: 3,
      name: 'Scss',
      level: 'Good knowledge',
    },
    {
      id: 4,
      name: 'Bootstrap',
      level: 'Basic knowledge',
    },
    {
      id: 5,
      name: 'SQL',
      level: 'Basic knowledge',
    },
    {
      id: 23,
      name: 'C#',
      level: 'Good knowledge',
    },
  ],
};

export const downSkills = {
  skills: [
    {
      id: 6,
      name: 'TypeScript',
      level: 'Good knowledge',
    },
    {
      id: 7,
      name: 'React',
      level: 'Good knowledge',
    },
    {
      id: 8,
      name: 'Redux',
      level: 'Good knowledge',
    },
    {
      id: 9,
      name: 'GatsbyJS',
      level: 'Good knowledge',
    },
    {
      id: 10,
      name: 'Node',
      level: 'Basic knowledge',
    },
    {
      id: 11,
      name: 'Styled Components',
      level: 'Good knowledge',
    },
  ],
};

export const projectsData = {
  projects: [
    {
      id: 13,
      title: 'MelodyPark',
      description: 'Commercial project made for RendPro. ',
      stack: 'Gatsby, React, Styled Components',
      image: melodyParkImage,
      code: '',
      live: 'https://www.melodypark.pl/',
    },
    {
      id: 14,
      title: 'Brochacki',
      description: 'Commercial project made for RendPro. Dynamic website with Strapi as a CMS.',
      stack: 'Gatsby, React, Styled Components, Strapi',
      image: brochackiImage,
      code: '',
      live: 'https://brochacki.pl/',
    },
    {
      id: 15,
      title: 'Bindly widget',
      description:
        'One of my commercial projects. I created styles for the Bindly widget in Scss and added some changes in js files.',
      stack: 'Html, Scss, Js',
      image: bindly,
      code: '',
      live: 'https://www.bindly.pl',
    },
    {
      id: 17,
      title: 'BookApi',
      description: 'Website made for searching books.',
      stack: 'React, Google Books API, SCSS',
      image: bookImage,
      code: 'https://github.com/Skwlx/BookApi',
      live: 'https://skwlx.github.io/BookApi/',
    },
    {
      id: 18,
      title: 'Car picker',
      description: 'App made for recrutation process.',
      stack: 'React, Redux, SCSS',
      image: carPickerImage,
      code: 'https://github.com/Skwlx/CarPicker',
      live: 'https://car-picker.netlify.app',
    },
  ],
};
