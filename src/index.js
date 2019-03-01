import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = (store) => next => action => {
  // this code will be executed between action and reducer
  // because in this way works a middleware
  console.log('Logger dispatching the action: ', action);
  // next will let the action to continue to reducer and to succed
  // we need to pass action as argument
  const result = next(action);
  console.log('Logger next state is: ', store.getState())
  return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ latency: 0 }) || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(logger, thunk)
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
