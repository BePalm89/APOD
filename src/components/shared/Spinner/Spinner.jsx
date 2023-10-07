import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../../assets/lottie/animation_lmwcodww.json'; // Replace with the actual path

const Spinner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Spinner;