import { useState, useEffect } from 'react';
import useThrottle from './useThrottle';

const useIntersectionObserver = (ref, options, throttleTime=300 ) => {
  const [isIntersected, setIsIntersected] = useState(false);

  const handleIntersection = useThrottle(() => {
    setIsIntersected(true);
    console.log('firing')
  }, throttleTime);

  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        handleIntersection();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options,]);

  return isIntersected;
};

export default useIntersectionObserver;
