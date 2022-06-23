import { configureStore, createStore } from '@reduxjs/toolkit'
import authSlice from './reducers/auth'
import counterSlice from './reducers/counter'

export default configureStore({
    reducer: {
        auth: authSlice,
        counter: counterSlice
    },
})