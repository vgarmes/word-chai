import { useState, useEffect, useRef } from 'react';
import loadHistory from '../utils/loadHistory';
import saveHistory from '../utils/saveHistory';

const usePersistedHistory = (onLoad, secret) => {
  const [history, setHistory] = useState([]);
  const loadedRef = useRef(false);
  useEffect(() => {
    if (loadedRef.current) {
      return;
    }
    loadedRef.current = true;
    let savedHistory = loadHistory(secret);
    if (savedHistory) {
      setHistory(savedHistory);
      onLoad(savedHistory);
    }
  });
  useEffect(() => {
    saveHistory(secret, history);
  }, [history]);
  return { history, setHistory };
};

export default usePersistedHistory;
