import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://demo-unsplash-images.netlify.app/',
    github: 'https://github.com/SUNIL7978/Unsplash-images-using-react',
    title: 'React Unsplash Demo Project',
    text: 'This is the demo image search project, this is the only for demo purposes , you can&apos;t download the high quality images only you can see the images , it is using for practice how can you do that project using react.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://cart-function-using-react.netlify.app/',
    github: 'https://github.com/SUNIL7978/Cart-Function-using-react',
    title: 'Cart Functionality using react',
    text: 'This project how to handled the cart functionality and also learn the createContext and useReducer , createContext how handle globaly store the data and access any where in compnent. ',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://mix-master-react-router-dom.netlify.app/',
    github: 'https://github.com/SUNIL7978/MIxMaster-Using-React-Router-Dom',
    title: 'mix-master project using react router dom',
    text: 'This project to help you how to create that project using react-router-dom and also using react-query and also uses library has axio,react-icons, learn the react-router-dom version 6.1.1.',
  },
];
