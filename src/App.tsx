import { useState } from 'react';
import { AppProvider } from './context/app-context';
import Cell from './components/Cell';
import Grid from './components/Grid';

export function App() {
  return (
    <AppProvider>
      <div id="screen">
        <h1>Wordle</h1>
        <Grid />
      </div>
    </AppProvider>
  );
}
