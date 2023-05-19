import cake from '../image/cake.jpg';
import cream from '../image/cream.jpg';
import macaron from '../image/macaron.jpg';

function menu() {
  return `
    <div class="page" id="menu">
      <h2 class="top-head">Menu</h2>

      <div class="dish">
        <h3 class="dish-name">dish name</h3>
        <h4 class="price">price</h4>
        <img src="${cake}" alt="" class="dish-img">
      </div>

      <div class="dish">
        <h3 class="dish-name">dish name</h3>
        <h4 class="price">price</h4>
        <img src="${cream}" alt="" class="dish-img">
      </div>

      <div class="dish">
        <h3 class="dish-name">dish name</h3>
        <h4 class="price">price</h4>
        <img src="${macaron}" alt="" class="dish-img">
     </div>
  
    </div> 
  `
}

export default menu;