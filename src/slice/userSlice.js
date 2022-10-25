import { createSlice } from'@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: [JSON.parse(localStorage.getItem('userData'))],
  reducers: {
     addUser: (state, action) => {
        const newUser = action.payload
        state.splice(0,1)
        state.push(newUser)
        localStorage.setItem('userData', JSON.stringify(newUser))
     },
     deleteUser: (state) => {
        state = []
        localStorage.removeItem('userData')
     }
  },
});

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer