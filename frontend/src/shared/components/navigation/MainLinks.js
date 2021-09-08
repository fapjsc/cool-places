import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/auth-context';

import classes from './MainLink.module.scss';
const MainLinks = () => {
  const authCtx = useContext(AuthContext);

  return (
    <ul className={classes['nav-links']}>
      <li>
        <NavLink to="/" activeClassName={classes.active} exact>
          ALL USERS
        </NavLink>
      </li>

      {authCtx.isLoggedIn && (
        <>
          <li>
            <NavLink to="/place/new" activeClassName={classes.active}>
              ADD PLACE
            </NavLink>
          </li>
          <li>
            <NavLink to="/u1/places" activeClassName={classes.active}>
              MY PLACES
            </NavLink>
          </li>
          <li onClick={authCtx.logout}>
            <button onClick={authCtx.logout}>LOGOUT</button>
          </li>
        </>
      )}

      {!authCtx.isLoggedIn && (
        <li>
          <NavLink to="/auth" activeClassName={classes.active}>
            AUTHENTICATE
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default MainLinks;
