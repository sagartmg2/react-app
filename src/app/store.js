import { configureStore, createStore } from '@reduxjs/toolkit'
import authSlice from './reducers/auth'
import counterSlice from './reducers/counter'
import createSagaMiddleware from 'redux-saga'
import { authSaga } from './saga/authSaga'
import { counterSaga } from './saga/counterSaga'

const saga = createSagaMiddleware();
const sagacounter = createSagaMiddleware();

export default configureStore({
    reducer: {
        auth: authSlice,
        counter: counterSlice
    },
    middleware: [saga,sagacounter]
})


saga.run(authSaga)
sagacounter.run(counterSaga)