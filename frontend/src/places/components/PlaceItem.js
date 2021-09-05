import classes from './PlaceItem.module.scss';
import Card from '../../shared/components/ui/Card';
import Button from '../../shared/components/formElement/Button';
import { useState, Fragment } from 'react';
import Modal from '../../shared/components/ui/Modal';
import Map from '../../shared/components/ui/Map';

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass={classes['place-item__modal-content']}
        footerClass={classes['place-item__modal-actions']}
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className={classes['map-container']}>
          <Map center={props.location} zoom={16} />
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
