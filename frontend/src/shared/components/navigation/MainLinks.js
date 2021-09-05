import { NavLink } from 'react-router-dom';

import classes from './MainLink.module.scss';
const MainLinks = () => {
  return (
    <ul className={classes['nav-links']}>
      <li>
        {/* <NavLink to="/" exact>ALL USERS</NavLink> */}
        <NavLink to="/" activeClassName={classes.active} exact>
          ALL USERS
        </NavLink>
      </li>

      <li>
        <NavLink to="/u1/places" activeClassName={classes.active}>
          MY PLACES
        </NavLink>
      </li>

      <li>
        <NavLink to="/place/new" activeClassName={classes.active}>
          ADD PLACE
        </NavLink>
      </li>

      <li>
        <NavLink to="/auth" activeClassName={classes.active}>
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default MainLinks;
