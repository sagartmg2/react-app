import { configureStore, createStore } from '@reduxjs/toolkit'
import authSlice from './reducers/auth'
import counterSlice from './reducers/counter'
import createSagaMiddleware from 'redux-saga'
import { authSaga } from './saga/authSaga'


const saga = createSagaMiddleware();

export default configureStore({
    reducer: {
        auth: authSlice,
        counter: counterSlice
    },
    middleware: [saga]
})


saga.run(authSaga)
