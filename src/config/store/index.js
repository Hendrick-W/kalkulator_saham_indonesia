import {createStore, combineReducers} from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore, persistReducer} from 'redux-persist'

import brokerReducer from '../reducers/brokerReducer'

const persistConfig = {
  key:'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers(
  {
    broker:persistReducer(persistConfig, brokerReducer)
  }
)

export const configureStore = createStore(rootReducer)
export const persistor = persistStore(configureStore)