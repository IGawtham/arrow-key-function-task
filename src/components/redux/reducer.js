import { COORDS } from './actionType';
const initialState = { coords: [] }

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case COORDS: return {
            ...state,
            coords: action.payload
        }
        default: return state

    }
}
export default Reducer