import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './slices/reducers'

export const store = configureStore({
  reducer : rootReducer,
})