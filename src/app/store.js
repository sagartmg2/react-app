import { configureStore, createStore } from '@reduxjs/toolkit'
import authSlice from './reducers/auth'

export default configureStore({
    reducer: {
        auth: authSlice
    },
})