import reducer, { getActors } from './actorsSlice';
const initialState = {
    value: {
        actors: [],
        quantity: 0
    }
};

describe('Get actors action', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle actors being added to an initial state', () => {
        expect(reducer(initialState, getActors([{ name: 'Luke Skywalker' }]))).toEqual({
            value: {
                actors: [{ name: 'Luke Skywalker' }],
                quantity: 1
            }
        })
    })

    it('should handle empty action payload', () => {
        expect(reducer(initialState, getActors([]))).toEqual(initialState)
    });
})


