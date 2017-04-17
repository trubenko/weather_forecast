import {combineReducers} from 'redux';
import weacher_search from './weacher_search'

const rootReducer = combineReducers({
    weather: weacher_search
});
export default rootReducer;