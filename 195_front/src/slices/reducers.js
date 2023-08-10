import {combineReducers} from '@reduxjs/toolkit';
import searchSlice from './searchSlice'

const rootReducer = combineReducers({
  search : searchSlice.reducer,
})

export default rootReducer;