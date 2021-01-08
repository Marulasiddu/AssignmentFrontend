import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router-dom';
import History from './history';
import reduxThunk from 'redux-thunk';
import rootReducer from './components/reducers/index';
import App from './App';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(reduxThunk)
        
    )
)

ReactDOM.render(
    <Provider store={store}>
      <Router history={History}>
        <App />
      </Router>
    </Provider> ,
  document.getElementById('root')
);

