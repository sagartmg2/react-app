
import { call, put, takeEvery } from 'redux-saga/effects'
import { setUser } from '../reducers/auth';
// decrement
// increment
import axios from "axios"
import { decrement, increment, incrementByAmount } from '../reducers/counter';

export function* callMe() {
    // let response= yield call(async () => {
    //      return await axios.get("https://jsonplaceholder.typicode.com/users/1")
    // })

    // yield put(setUser(response.data))
    yield put(incrementByAmount(100))
}

export function* counterSaga() {
    yield takeEvery("counter/decrement", callMe)
}