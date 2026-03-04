import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(nama, kelas, alamat) {
        return {
          payload: {
            id: nanoid(),
            nama,
            kelas,
            alamat,
          },
        };
      },
    },

    removeStudent(state, action) {
      return state.filter((student) => student.id !== action.payload);
    },

    updateStudent(state, action) {
      return state.map((student) =>
        student.id === action.payload.id
          ? action.payload
          : student
      );
    },
  },
});

export const { addStudent, removeStudent, updateStudent } =
  studentSlice.actions;

export default studentSlice.reducer;