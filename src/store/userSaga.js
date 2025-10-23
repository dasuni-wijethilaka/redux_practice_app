import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from './userSlice';

// Mock API call using JSONPlaceholder
function fetchUsersApi() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
}

// Worker saga
function* fetchUsersSaga(action) {
  try {
    // You can use the payload from action if needed
    console.log('Action payload:', action.payload);
    
    const users = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

// Watcher saga
export function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}