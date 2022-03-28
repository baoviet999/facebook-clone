import { statusSaga } from 'features/CreateStatus/statusSaga';
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
    yield all([statusSaga()]);
}
