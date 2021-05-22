import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import isDev from '../utils/isDev';
import reducer from './RootReducer';

export default function configureStore() {
    let store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk),
            (isDev && (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f)
        )
    );
    let persistor = persistStore(store)

    return { persistor, store }
}

export const { persistor, store } = configureStore()