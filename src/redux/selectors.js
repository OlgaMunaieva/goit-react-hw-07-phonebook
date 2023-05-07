import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log(filter);
    console.log(contacts);
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

// switch (statusFilter) {
//   case statusFilters.active:
//     return tasks.filter(task => !task.completed);
//   case statusFilters.completed:
//     return tasks.filter(task => task.completed);
//   default:
//     return tasks;
// }
// };
