import {configureStore} from '@reduxjs/toolkit'
import favouritesReducer from '../slice/favouritesSlice'
import jobSearchReducer  from '../slice/jobSlice'

export const store = configureStore({
    reducer : {
        favourites : favouritesReducer,
        jobSearch : jobSearchReducer
    }
})