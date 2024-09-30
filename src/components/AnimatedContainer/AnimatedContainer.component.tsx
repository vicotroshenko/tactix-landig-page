import { motion, useAnimate, useInView } from 'framer-motion';
import React, { useEffect } from 'react';

interface AnimatedContainerProps {
  children: React.ReactNode;
}
const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ children }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false });

  useEffect(() => {
    isInView &&
      animate(
        scope.current,
        {
          opacity: 1,
          y: 0,
        },
        { duration: 0.25, delay: 0.25 }
      );

    !isInView &&
      animate(scope.current, {
        opacity: 0,
        y: 100,
      });
  }, [isInView, animate, scope]);

  return <motion.div ref={scope}>{children}</motion.div>;
};

export default AnimatedContainer;
