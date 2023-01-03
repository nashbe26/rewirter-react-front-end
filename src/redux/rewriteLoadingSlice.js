import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:"waiting" | "succeeded" | "fetching",
    text:null
}

export const rewriteStatusSlice = createSlice({
    name:"rewriteStatus",
    initialState,
    reducers:{
        isRewriteLoading:(state,{payload})=>{
            console.log(payload);
            state.status = payload
        },
        rewriteData:(state,{payload})=>{
            console.log(payload);
            state.text = payload
        }
    }
});

export const {isRewriteLoading,rewriteData} = rewriteStatusSlice.actions;

export default rewriteStatusSlice.reducer;