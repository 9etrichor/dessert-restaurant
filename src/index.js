import './style.css';
import NavHeader from './component/NavHeader';
import Home from './component/Home.js';
import Menu from './component/Menu';
import Contact from './component/Contact';


const bgElement = document.getElementById('content');
bgElement.innerHTML += NavHeader();
//bgElement.innerHTML += Home();
bgElement.innerHTML += Contact();
//bgElement.innerHTML += Menu();

const navHeader = document.getElementById('nav-header');
navHeader.addEventListener()

