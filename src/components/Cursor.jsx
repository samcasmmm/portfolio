import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const Cursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const hoverablesRef = useRef([]);
  useEffect(() => {
    const bigBall = document.querySelector('.cursor__ball--big');
    const smallBall = document.querySelector('.cursor__ball--small');
    const hoverables = document.querySelectorAll('.hoverable');

    const onMouseMove = (e) => {
      const scrollY = window.scrollY || window.pageYOffset;
      gsap.to(bigBall, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15 - scrollY,
      });
      gsap.to(smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7 - scrollY,
      });
    };

    const onMouseHover = () => {
      gsap.to(bigBall, 0.3, {
        scale: 2,
      });
    };

    const onMouseHoverOut = () => {
      gsap.to(bigBall, 0.3, {
        scale: 1,
      });
    };

    document.body.addEventListener('mousemove', onMouseMove);
    hoverables.forEach((element) => {
      element.addEventListener('mouseenter', onMouseHover);
      element.addEventListener('mouseleave', onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      hoverables.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseHover);
        element.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className='cursor'>
      <div className='cursor__ball cursor__ball--big '>
        <svg height='60' width='60'>
          <circle cx='30' cy='30' r='24' strokeWidth='0'></circle>
        </svg>
      </div>

      <div className='cursor__ball cursor__ball--small'>
        <svg height='20' width='20'>
          <circle cx='10' cy='10' r='8' strokeWidth='0'></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
