import classes from './PlaceItem.module.scss';
import Card from '../../shared/components/ui/Card';
import Button from '../../shared/components/formElement/Button';

const PlaceItem = props => {
  return (
    <li className={classes['place-item']}>
      <Card className={classes['place-item__content']}>
        <div className={classes['place-item__image']}>
          <img src={props.imageUrl} alt={props.title} />
        </div>

        <div className={classes['place-item__info']}>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>

        <div className={classes['place-item__actions']}>
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
