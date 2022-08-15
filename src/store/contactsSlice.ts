import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

const array = [
  { id: 1, label: 'hello', info: 'world' },
  { id: 2, label: 'Lorem', info: 'world' },
  { id: 3, label: 'Lorem', info: 'world' },
]

type TContacts = {
  data: {
    id: number
    label: string
    info: string
  }[]
}

const initialState: TContacts = {
  data: array,
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state) => {
      state.data = [...state.data]
    },
    removeContact: (state) => {
      state.data = [...state.data]
    },
    editContact: (state, action: PayloadAction<number>) => {
      state.data = [...state.data]
    },
  },
})

export const { addContact, removeContact, editContact } = contactsSlice.actions

export const selectCount = (state: RootState) => state.contacts.data

export default contactsSlice.reducer
