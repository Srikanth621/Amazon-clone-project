import { Iterable } from 'immutable'
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit'
import basketReducer from "../features/amazon/basketSlice";
import userReducer from "../features/amazon/userSlice";



const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value)

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
})

export default configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
  },
  middleware: [serializableMiddleware],
});
