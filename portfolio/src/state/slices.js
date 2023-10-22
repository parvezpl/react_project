import { createSlice } from '@reduxjs/toolkit';


const initialState ={
    works:[{
        id:"works",
        proname:"",
        prodate:"",
    }]

}

const workSlice = createSlice({
    name: 'my work',
    initialState,
    reducers:{
        addWork: () =>{}

    }
})

export const {addWork} = workSlice.actions

export default workSlice.reducer