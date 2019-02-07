import { FETCH_COSTS } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COSTS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}