import { createSlice } from "@reduxjs/toolkit";

const cardslice=createSlice({
    name:"card Slice",
    initialState:{
        items:{item1:false,item2:false,item3:false,item4:false,item5:false},
    },
    reducers:{
        addCard:(state, action) => {
            console.log(action.payload);
            state.items={...state.items,
                item1:action.payload.item1,
                // item2:action.payload.item2,
                // item3:action.payload.item3,
                // item4:action.payload.item4,
                // item5:action.payload.item5
            }
            console.log(state.items);
        }
    }
})

export const { addCard } = cardslice.actions
export default cardslice.reducer