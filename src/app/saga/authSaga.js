
import { call, put, takeEvery } from 'redux-saga/effects'
import { setUser } from '../reducers/auth';
import axios from "axios"

export function* callMe() {
    let response= yield call(async () => {
         return await axios.get("https://jsonplaceholder.typicode.com/users/1")
    })

    yield put(setUser(response.data))
}

export function* authSaga() {
    yield takeEvery("auth/login", callMe)
}