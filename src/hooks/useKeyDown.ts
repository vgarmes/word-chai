import { useEffect } from 'react';

const useKeyDown = (handleKey) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }
      handleKey(e.key);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
};

export default useKeyDown;
