import storage from 'redux-persist/lib/storage';
import { persistCombineReducers } from 'redux-persist';
import BaseReducer from './BaseReducer';
import task from '../Container/Task/Reducer';

const rootReducer = {
    baseReducer: BaseReducer,
    task
}

export const persistConfig = {
    key: 'Project.0.0',
    storage,
    blacklist: [
        'task',
    ]
}

const appReducer = persistCombineReducers(persistConfig, rootReducer)

const reducer = (state, action) => {
    return appReducer(state, action)
};

export default reducer;