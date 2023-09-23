// store.js
import { createStore } from 'redux';
import landingPageReducer from './redux/reducers/landing_reducers';

const store = createStore(landingPageReducer);

export default store;