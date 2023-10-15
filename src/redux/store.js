import { applyMiddleware} from "redux";
import { legacy_createStore as createStore} from 'redux';

import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from"./root-reducer";
//logger is nor required if our app is in production

const middleware=[thunk];
if(process.env.NODE_ENV==="development"){
    middleware.push(logger);

}
const store=createStore(rootReducer,applyMiddleware(...middleware));
export default store;