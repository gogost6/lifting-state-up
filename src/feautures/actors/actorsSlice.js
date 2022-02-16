import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        actors: [],
        quantity: 0
    },
}

export const actorsSlice = createSlice({
    name: 'actors',
    initialState,
    reducers: {
        getActors: (state, action) => {
            state.value.actors = action.payload;
            state.value.quantity += action.payload.length;
        },
        addActor: (state, action) => {
            state.value.actors.push(action.payload);
            state.value.quantity += 1;
        },
        removeActor: (state, action) => {
            const actorIndex = state.value.actors.findIndex(action.payload);
            if (actorIndex !== -1) {
                state.value.actors.splice(actorIndex, 1)
            } else {
                return null;
            }
        },
    },
})

export const { getActors, removeActor, addActor } = actorsSlice.actions;

export default actorsSlice.reducer;