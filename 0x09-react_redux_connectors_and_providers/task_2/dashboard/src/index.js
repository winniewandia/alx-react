import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import uiReducer, { initialState } from './reducers/uiReducer';
import {thunk} from 'redux-thunk';
import { Map } from 'immutable';

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  uiReducer,
  Map(initialState),
  composedEnhancer(applyMiddleware(thunk))
);
// console.log(store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// );
// store.dispatch({ type: 'LOGIN' });
// store.dispatch({ type: 'LOGOUT' });
// store.dispatch({ type: 'DISPLAY_NOTIFICATION_DRAWER' });
// store.dispatch({ type: 'HIDE_NOTIFICATION_DRAWER' });
// unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// console.log(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();