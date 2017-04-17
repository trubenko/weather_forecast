import {WEATHER_ACTION} from '../actions/weather';

export default  function (state = [], action) {
        switch (action.type){
            case WEATHER_ACTION:
                return [action.payload, ...state]
            default:
                return state;
        }
}