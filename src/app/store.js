import { configureStore } from '@reduxjs/toolkit';
import actorsReducer from '../feautures/actors/actorsSlice';

export const store = configureStore({
    reducer: {
        actors: actorsReducer,
    },
})