import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import storeFromOurCreateStore from './state/store';
import { Provider } from 'react-redux';

const Root = () => (
  <Provider store={storeFromOurCreateStore}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
