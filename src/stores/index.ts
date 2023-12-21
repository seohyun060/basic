import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import loginReducer from './login';
import AccessAuthReducer from './accessAuth';

const reducers = combineReducers({
  login: loginReducer,
  accessAuth: AccessAuthReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
  blacklist: ['dialog', 'report', 'search'],
};

const reducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }), //  상태값 중 모든 타입의 값이 할당되어도 에러가 발생하지 않도록
  // 초기 상태값 설정
  //preloadedState:{}
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
