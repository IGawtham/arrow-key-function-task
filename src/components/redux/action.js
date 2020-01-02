import { COORDS } from './actionType';

export const updateCoords = (coords) => {
    return {
        type: COORDS,
        payload: coords
    }
}
