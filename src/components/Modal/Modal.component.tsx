import classNames from 'classnames';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';



import { useKeyDown } from '../../hooks/useKeyDown';
import './Modal.scss';


const modalRoot = document.querySelector('#modal-root');

interface ModalProps {
  children: React.ReactNode;
  toggle: () => void;
  visible: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, toggle, visible }) => {
  useKeyDown({
    fn: toggle,
    keyName: 'Escape'
  })

  useEffect(() => {
    if(visible){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [visible]);
  

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      toggle();
    }
  };
  return modalRoot
    ? createPortal(
        <div
          className={classNames('backdrop', { backdrop_show: visible })}
          onClick={handleBackdropClick}
        >
          {children}
        </div>,
        modalRoot
      )
    : null;
};

export default Modal;