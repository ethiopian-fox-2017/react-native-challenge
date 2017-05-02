import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middleWare = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, middleWare);

export default store;
