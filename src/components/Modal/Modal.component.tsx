import classNames from 'classnames';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

interface ModalProps {
  children: React.ReactNode;
  toggle: () => void;
  visible: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, toggle, visible }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        toggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

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
