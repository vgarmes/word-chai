import { useState, useRef } from 'react';
import { useAppContext } from './context/app-context';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import useKeyDown from './hooks/useKeyDown';
import usePersistedHistory from './hooks/usePersistedHistory';
import { calculateBestColors } from './utils/calculateBestColors';

export function App() {
  const { secret, dictionary } = useAppContext();
  const { history, setHistory } = usePersistedHistory(
    (h) => waitForAnimation(h),
    secret
  );
  const [currentAttempt, setCurrentAttempt] = useState('');
  const [bestColors, setBestColors] = useState(() => new Map());

  const handleKey = (key) => {
    if (history.length === 6) {
      return;
    }
    if (animatingRef.current) {
      return;
    }
    let letter = key.toLowerCase();
    if (letter === 'enter') {
      if (currentAttempt.length < 5) {
        return;
      }
      if (!dictionary.includes(currentAttempt)) {
        alert('Not in dictionary');
        return;
      }
      if (history.length === 5 && currentAttempt !== secret) {
        alert(secret);
      }
      let newHistory = [...history, currentAttempt];
      setHistory(newHistory);
      setCurrentAttempt('');
      waitForAnimation(newHistory);
    } else if (letter === 'backspace') {
      setCurrentAttempt(currentAttempt.slice(0, currentAttempt.length - 1));
    } else if (/^[a-z]$/.test(letter)) {
      if (currentAttempt.length < 5) {
        setCurrentAttempt(currentAttempt + letter);
      }
    }
  };
  useKeyDown(handleKey);

  let animatingRef = useRef(false);
  const waitForAnimation = (nextHistory) => {
    if (animatingRef.current) {
      throw Error('should never happen');
    }
    animatingRef.current = true;
    setTimeout(() => {
      animatingRef.current = false;
      setBestColors(calculateBestColors(nextHistory, secret));
    }, 2000);
  };
  return (
    <div id="screen">
      <h1>Wordle</h1>
      <Grid history={history} currentAttempt={currentAttempt} />
      <Keyboard bestColors={bestColors} onKey={handleKey} />
    </div>
  );
}
