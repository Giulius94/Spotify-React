import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobSearch : [],
    loading : false,
    error : ''
}

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const getSearchedJob = createAsyncThunk("searchedJob/fetch",async (query) => {

    const response = await fetch (baseEndpoint + query + '&limit=20')
    if(!response.ok) {throw new Error(response.statusText)}
    return response.json()
})

const jobSearch_slice = createSlice(
    {
        name: 'jobSearch',
        initialState : initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getSearchedJob.pending, (state,action)=>{
                state.loading = true
            })
            .addCase(getSearchedJob.rejected, (state,action)=>{
                state.loading = false
                state.error = 'Errore nel caricamento dei dati'
            })
            .addCase(getSearchedJob.fulfilled, (state,action)=>{
                state.loading = false
                state.jobSearch = action.payload.data
            })
        }
    }
)    

    const {reducer} = jobSearch_slice;
   /*  export const {addFavourite,removeFavourite} = actions; */

    export default reducer; 