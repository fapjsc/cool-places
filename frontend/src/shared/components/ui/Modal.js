import classes from './Modal.module.scss';
import ReactDOM from 'react-dom';
import Backdrop from '../ui/Backdrop';
import { CSSTransition } from 'react-transition-group';
import { Fragment, useRef } from 'react';

import slideTransition from './slide.module.scss';

const ModalOverlay = props => {
  const content = (
    <div
      ref={props.nodeRef}
      className={`${classes['modal']} ${props.classesName}`}
      style={props.style}
    >
      <header className={`${classes['modal__header']} ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>

      <form onSubmit={props.onSubmit ? props.onSubmit : e => e.preventDefault()}>
        <div className={`${classes['modal__content']} ${props.contentClass}`}>{props.children}</div>

        <footer className={`${classes['modal__footer']} ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  const nodeRef = useRef(null);

  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={slideTransition}
      >
        <ModalOverlay {...props} nodeRef={nodeRef} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
