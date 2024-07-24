import {configureStore} from '@reduxjs/toolkit'
import user from '../slice/User'
import users from '../slice/Users'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from '../redux/saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        user, 
        users
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware.apply({thunk : false}).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store