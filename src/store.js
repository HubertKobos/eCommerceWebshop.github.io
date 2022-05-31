import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/loginModalSlice'
import registerModalReducer from './reducers/registerModalSlice'
export const store = configureStore({
    reducer: {
        modal: modalReducer,
        registerModal: registerModalReducer
    },
})