import { MainBody } from './Styling/BodyStyle';
import { snacks } from './Datafiles/snacks';
import { drinks } from './Datafiles/drinks';
import CardComponent from './CardComponent';
import BurgerImage from './Images/burger.png';
import ResturentLogo from './Images/resturentlogoorange.png';
import './BodyComponent.css';

const BodyComponent = () => (
  <MainBody key='mainbody'>
    <div id='banner_container'>
      <div id='banner_image_container'>
        <img
          src={BurgerImage}
          alt='burger'
          id='bannerimage'
          key='bannerimage'
        />
      </div>
      <div id='banner_content_container'>
        <img
          src={ResturentLogo}
          alt='ResturentLogo'
          id='resturent_logo'
          key='resturentlogo'
        />
        <div id='brandname'>Food Villa</div>
        <div id='tagline'>" Hundreds of flavors under one roof "</div>
        <div id='bannerinfo'>Come and try our new Light & Healthy menu</div>
        <button id='order_now_btn' key='order_now_btn'>
          Order Now
        </button>
      </div>
    </div>
    <span id='category_heading'>Snacks</span>
    <div id='snacks_container'>
      <CardComponent cardlist={snacks} />
    </div>
    <span id='category_heading'>Drinks</span>
    <div id='snacks_container'>
      <CardComponent cardlist={drinks} />
    </div>
  </MainBody>
);

export default BodyComponent;
