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
        addActors: (state, action) => {
            state.value.actors.push(action.payload);
            state.value.quantity += action.payload.length;
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

export const { addActors, removeActor } = actorsSlice.actions;

export default actorsSlice.reducer;