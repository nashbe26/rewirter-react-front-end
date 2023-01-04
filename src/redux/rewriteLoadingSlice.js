import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:"waiting" | "succeeded" | "fetching",
    text:null,
    premPack:false
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
        },
        setPremPack:(state,{payload})=>{
            console.log(payload);
            state.premPack = payload
        }
    }
    
});

export const {isRewriteLoading,rewriteData,setPremPack} = rewriteStatusSlice.actions;

export default rewriteStatusSlice.reducer;