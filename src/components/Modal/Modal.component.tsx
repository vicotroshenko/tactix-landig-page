import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useKeyDown } from '../../hooks/useKeyDown';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

interface ModalProps {
  children: React.ReactNode;
  toggle: () => void;
  visible: boolean;
  bodyScroll?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  toggle,
  visible,
  bodyScroll = false,
}) => {
  useKeyDown({
    fn: toggle,
    keyName: 'Escape',
  });

  useEffect(() => {
    if (visible && bodyScroll) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [visible, bodyScroll]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      toggle();
    }
  };
  return modalRoot
    ? createPortal(
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, x: '100vw' }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.35,
                },
              }}
              exit={{ opacity: 0 }}
              className="backdrop"
              onClick={handleBackdropClick}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>,
        modalRoot
      )
    : null;
};

export default Modal;
