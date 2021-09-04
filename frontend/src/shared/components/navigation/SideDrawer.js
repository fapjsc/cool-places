import classes from './SideDrawer.module.scss';
import ReactDOM from 'react-dom';

const SideDrawer = ({ children }) => {
  const content = <aside className={classes['side-drawer']}>{children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
