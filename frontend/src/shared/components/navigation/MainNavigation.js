import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import MainLinks from './MainLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../ui/Backdrop';

import classes from './MainNavigation.module.scss';

import { useState } from 'react';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

      {drawerIsOpen && (
        <SideDrawer>
          <nav className={classes['drawer-nav']}>
            <MainLinks />
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button className={classes['menu-btn']} onClick={openDrawer}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link className={classes['title-link']} to="/">
          <h1 className={classes.title}>Your Places</h1>
        </Link>

        <nav className={classes['header-nav']}>
          <MainLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
