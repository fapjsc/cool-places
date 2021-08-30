import Card from '../../shared/components/ui/Card';
import classes from './UserItem.module.scss';
import Avatar from '../../shared/components/ui/Avatar';

import { Link } from 'react-router-dom';

const UserItem = ({ id, name, image, places }) => {
  return (
    <li className={classes.userItem}>
      <Card className={classes.userItemContent}>
        <Link to={`/${id}/places`}>
          <div className={classes.userItemImage}>
            <Avatar image={image} alt={name} />
          </div>

          <div className={classes.userItemInfo}>
            <h2>{name}</h2>
            <h3>
              {places} {places === 1 ? 'place' : 'places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
