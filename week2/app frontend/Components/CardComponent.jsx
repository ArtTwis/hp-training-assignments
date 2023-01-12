import { snacks } from './Datafiles/snacks';

const CardComponent = (props) =>
  props.cardlist.map((cardListItem) => (
    <div className='snack_card'>
      <div className='card_imagebox'>
        <img
          className='card_image'
          src={cardListItem.picture}
          alt={cardListItem + '_logo'}
          id={cardListItem + '_picture'}
          key={cardListItem + '_picture'}
        />
      </div>
      <div className='card_content'>
        <span className='cardItem'>{cardListItem.itemname}</span>
        <span className='cardDesc'>{cardListItem.description}</span>
        <span className='cardPrice'>{'$ ' + cardListItem.price}</span>
      </div>
    </div>
  ));

export default CardComponent;
