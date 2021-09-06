import classes from './PlaceList.module.scss';
import Card from '../../shared/components/ui/Card';
import PlaceItem from '../components/PlaceItem';
import Button from '../../shared/components/formElement/Button';

const PlaceList = ({ placeList }) => {
  if (placeList.length === 0) {
    return (
      <div className={`${classes['place-list']} center`}>
        <Card>
          <h2>No Places Found.</h2>
          <Button to="/place/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={classes['place-list']}>
      {placeList.map(place => (
        <PlaceItem key={place.id} id={place.id} {...place} />
      ))}
    </ul>
  );
};

export default PlaceList;
