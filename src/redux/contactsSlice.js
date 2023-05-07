import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [addContact, deleteContact, fetchContacts];

const getActions = type => isAnyOf(...arrThunks.map(thunk => thunk[type]));

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledGet = (state, action) => {
  // state.isLoading = false;
  // state.error = null;
  state.items = action.payload;
};
const handleFulfilledCreate = (state, action) => {
  state.items.push(action.payload);
};
const handleFulfilledDelete = (state, action) => {
  // state.isLoading = false;
  // state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    const { FULFILLED, REJECTED, PENDING } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledCreate)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected)
      .addMatcher(getActions(FULFILLED), handleFulfilled);
    // .addCase(fetchContacts.pending, handlePending)
    // .addCase(fetchContacts.rejected, handleRejected)
    // .addCase(addContact.pending, handlePending)
    // .addCase(addContact.rejected, handleRejected)
    // .addCase(deleteContact.pending, handlePending)
    // .addCase(deleteContact.rejected, handleRejected);
  },
});

// Редюсер слайсу

export const contactsReducer = contactsSlice.reducer;
