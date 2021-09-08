import { useContext, useState, Fragment } from 'react';

// Context
import { AuthContext } from '../../context/auth-context';

// Components
import Card from '../../shared/components/ui/Card';
import Button from '../../shared/components/formElement/Button';
import Modal from '../../shared/components/ui/Modal';
import Map from '../../shared/components/ui/Map';

// Style
import classes from './PlaceItem.module.scss';

const PlaceItem = props => {
  // Auth Context
  const authCtx = useContext(AuthContext);

  // Init State
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarnHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log('delete...');
  };

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

      <Modal
        show={showConfirmModal}
        header="Are you sure?"
        footerClass={classes['place-item__modal-actions']}
        onCancel={cancelDeleteHandler}
        footer={
          <Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? please note that it can't be undone there
          after
        </p>
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

            {authCtx.isLoggedIn && (
              <>
                <Button to={`/places/${props.id}`}>EDIT</Button>

                <Button danger onClick={showDeleteWarnHandler}>
                  DELETE
                </Button>
              </>
            )}
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
