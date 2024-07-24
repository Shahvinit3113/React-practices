import { all } from "@redux-saga/core/effects"
import { watchUsersAsync } from "./user"

export function* rootSaga(){
    yield all([
        watchUsersAsync()
    ])
}