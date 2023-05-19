import './style.css';
//import pages or component
import NavHeader from './component/NavHeader';
import Home from './component/Home.js';
import Menu from './component/Menu';
import Contact from './component/Contact';

//import controller
import TransformPage from './controller/TransformPage';

const bgElement = document.getElementById('content');
bgElement.innerHTML += NavHeader();
bgElement.innerHTML += Home();
bgElement.innerHTML += Contact();
bgElement.innerHTML += Menu();

const navHeader = document.getElementById('nav-header');
console.log(navHeader.style)
//click event listener of transform to other page
//callback function is for transformation
navHeader.addEventListener('click', (event) => {
  TransformPage(event.target);
}) 


function test(e) {
  console.log("hihi")
  console.log(e.target)
}
