import { useState } from 'react';
import { AppProvider } from './context/app-context';
import Cell from './components/Cell';
import Grid from './components/Grid';

export function App() {
  const history = ['piano', 'patio'];
  const currentAttempt = 'pizza';
  return (
    <div id="screen">
      <h1>Wordle</h1>
      <Grid history={history} currentAttempt={currentAttempt} />
    </div>
  );
}
