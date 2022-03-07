import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';
import * as R from 'ramda';
import moment from 'moment';

/** ---------------------------------- */
/** HELPERS */
/** ---------------------------------- */
const firebaseTimestampToDate = date => moment(date.toDate()).format();

const transformEvents = R.map(e => ({
  title: e.title,
  groupId: e.groupId,
  start: firebaseTimestampToDate(e.startDateTime),
  end: firebaseTimestampToDate(e.endDateTime),
  data: R.omit(['startDateTime', 'endDateTime'], e),
}));

/** ---------------------------------- */
/** SELECTORS */
/** ---------------------------------- */
export const selectEvents = R.prop('events');

const initialState = {
  events: [],
};

/** ---------------------------------- */
/** ASYNC THUNKS */
/** ---------------------------------- */
export const fetchEvents = createAsyncThunk(
  'fetchEvents',
  async () => {
    const response = await api.fetchEvents();
    return transformEvents(response);
  }
)

/** ---------------------------------- */
/** REDUCER */
/** ---------------------------------- */
export const { actions, reducer } = createSlice({
  name: 'state',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEvents.fulfilled]: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const store = configureStore({ reducer });