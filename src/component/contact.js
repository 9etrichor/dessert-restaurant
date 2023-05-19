import raccoon1 from '../image/raccoon5.png' ;
import raccoon2 from '../image/raccoon4.png';
import raccoon3 from '../image/raccoon6.png';

//raccoon1 is a path to the image
function contact() {
  return `
  <div class="page" id="contact-us">
   <h2 class="top-head">conatct us</h2>
    <div class="staff">
      <img src="${raccoon1}" alt="" srcset="">
      <h3 class="staff-name">Jason</h3>
      <ul class="intron-staff">
        <li class="staff-info">Chef</li>
        <li class="staff-info">1233 2112</li>
        <li class="staff-info">certainlyRealEmail@notFake.com</li>
      </ul>
    </div>

   <div class="staff">
      <img src="${raccoon3}" alt="" srcset="">
      <h3 class="staff-name">super Zeri</h3>
      <ul class="intron-staff">
        <li class="staff-info">Manager</li>
        <li class="staff-info">2112 1233</li>
        <li class="staff-info">undoubtedlyRealEmail@notFake.com</li>
      </ul>
    </div>

   <div class="staff">
      <img src="${raccoon2}" alt="" srcset="">
      <h3 class="staff-name">Crystal</h3>
      <ul class="intron-staff">
        <li class="staff-info">waiter</li>
        <li class="staff-info">6767 6767</li>
        <li class="staff-info">absolutelyRealEmail@notFake.com</li>
      </ul>
    </div>
</div>
  `
}

export default contact;