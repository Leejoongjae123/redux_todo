import { configureStore,createSlice } from '@reduxjs/toolkit'

let user=createSlice({
  name:'user',
  initialState:['lee','kim','choi'],
  reducers:{
    changeList(state,action){
      state.push(action.payload)
    },
    removeList(state,action){
      const result=state.filter(elem=>elem!==action.payload)
      return result
    }
  }

  }
)

export let {changeList,removeList}=user.actions

export default configureStore({
  reducer: {
    user:user.reducer
  }
}) 