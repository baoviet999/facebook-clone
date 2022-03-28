import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, take, takeLatest } from 'redux-saga/effects';
import { Status, statusAction } from './statusSlice';

function* handleSetStatus(actions: PayloadAction<Status>) {
    yield delay(2000);
    actions.payload.redirect();
    yield put(statusAction.setStatusSuccess(actions.payload));
}

export function* statusSaga() {
    yield takeLatest(statusAction.setStatus, handleSetStatus);
}
