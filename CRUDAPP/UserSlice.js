import { createSlice } from '@reduxjs/toolkit'

const initialState= [
    { id: 1, name: "med", email: "med@gmail.com" },
    { id: 2, name: "saber", email: "saber@gmail.com" }
]

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload)
    },
  },
})

export const { addUser  } = UserSlice.actions

export default UserSlice.reducer