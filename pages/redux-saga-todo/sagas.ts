import { stringify } from 'querystring';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';

import { add, remove, toggle, reset } from '../app/actions';
import { apiCall } from '../app/api';

import { REQUEST_TO_ADD, REQUEST_TO_REMOVE, REQUEST_TO_TOGGLE, REQUEST_TO_RESET } from './constants';
import { RequestToAdd, RequestToRemove, RequestToToggle, RequestToReset } from './types';

function* requestAddTodo(data: RequestToAdd) {

    try {
        yield call(apiCall)
        yield put(add(data.todo))
    } catch(e) {
        console.error('error module')
    }
}

function* requestRemoveTodo(data: RequestToRemove) {
    try {
        yield call(apiCall)
        yield put(remove(data.id))
    } catch(e) {
        console.error('error module')
    }
}

function* requestToggleTodo(data: RequestToToggle) {
    try {
        yield call(apiCall)
        yield put(toggle(data.id))
    } catch(e) {
        console.error('error module')
    }
}

function* requestReset(data: RequestToReset) {
    try {
        yield call(apiCall)
        yield put(reset())
    } catch(e) {
        console.error('error module')
    }
}

function* watchAddTodo() {
    yield takeEvery(REQUEST_TO_ADD, requestAddTodo);
}

function* watchRemoveTodo() {
    yield takeEvery(REQUEST_TO_REMOVE, requestRemoveTodo);
}

function* watchToggleTodo() {
    yield takeEvery(REQUEST_TO_TOGGLE, requestToggleTodo);
}

function* watchReset() {
    yield takeEvery(REQUEST_TO_RESET, requestReset);
}

const rootSaga = function* root() {
    yield all([
        fork(watchAddTodo),
        fork(watchRemoveTodo),
        fork(watchToggleTodo),
        fork(watchReset)
    ])
}

export default rootSaga;