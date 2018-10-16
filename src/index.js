import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';

const initialData = {
  242209479: { id: 242209479, title: 'Best way to load a folder of static files?', state: 'open' },
  242209480: { id: 242209480, title: 'Slow production build', state: 'open' },
  242209481: { id: 242209481, title: 'Support application version via env variable', state: 'open' },
  242209482: { id: 242209482, title: 'Tree Shaking?', state: 'open' },
  242209483: { id: 242209483, title: 'Code splitting with import promise in object', state: 'closed' },
};
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  { issues: initialData },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content'),
);
