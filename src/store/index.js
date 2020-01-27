import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../_reducers';

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export {
  store,
}