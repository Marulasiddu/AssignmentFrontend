import { combineReducers } from 'redux';
import { reducer as missionReducer} from './missionreducer';

const rootReducer = combineReducers({
    mission: missionReducer,
})

export default rootReducer;