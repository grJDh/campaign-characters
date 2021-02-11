import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  tags: {
    "Age": "",
    "Gender": "",
    "Race": "",
    "Home": "",
    "Organisation": "",
  },
  boolTags: {
    "Major": false,
    "Alive": true
  },
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    bla: (state) => {
      state.boolTags = false;
    },
  }
});

export const { bla } = tagsSlice.actions;

export const tagsSelector = state => state.tags;

export default tagsSlice.reducer;