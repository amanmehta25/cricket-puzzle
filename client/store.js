import { createStore,compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import all the state
import data from './data/data';

// create an object for the default data
const defaultState = {
    data
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
