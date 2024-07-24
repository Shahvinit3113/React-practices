import { put, takeEvery } from "@redux-saga/core/effects"
import { createUserApi, deleteUserApi, getUserByIdApi, getUsersApi, updateUserApi } from "../../api"
import { addUserSlice, deleteUserSlice, editUserSlice, getUsersSlice } from "../../slice/Users"
import { setUserSlice } from "../../slice/User"
import {CREATE_USER, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID, DELETE_USER_BY_ID} from '../types/index'

export function* getUsersSaga (){
    const users = yield getUsersApi()
    yield put(getUsersSlice(users.data))
}

export function* getUserByIdSaga(action){
    yield getUserByIdApi(action.id)
    yield put(setUserSlice(action.id))
}

export function* createUserSaga(action){
    yield createUserApi(action.user)
    yield put(addUserSlice(action.user))
}

export function* updateUserSaga (action){
    yield updateUserApi(action.user)
    yield put(editUserSlice(action.user))
}

export function* deleteUserByIdSaga (action) {
    yield deleteUserApi(action.id)
    yield put(deleteUserSlice(action.id))
}

export function* watchUsersAsync() {
    yield takeEvery(GET_USERS, getUsersSaga)
    yield takeEvery(GET_USER_BY_ID, getUserByIdSaga)
    yield takeEvery(CREATE_USER, createUserSaga)
    yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID, deleteUserByIdSaga)
}