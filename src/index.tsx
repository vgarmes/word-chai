import ReactDOM from 'react-dom';
import { App } from './App';
import { AppProvider } from './context/app-context';

const app = document.getElementById('app');
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  app
);
