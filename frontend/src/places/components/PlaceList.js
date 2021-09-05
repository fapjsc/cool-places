import classes from './PlaceList.module.scss';
import Card from '../../shared/components/ui/Card';
import PlaceItem from '../components/PlaceItem';

const PlaceList = ({ placeList }) => {
  if (placeList.length === 0) {
    return (
      <div className={`${classes['place-list']} center`}>
        <Card>
          <h2>No Places Found.</h2>
          <button>Share Place</button>
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
