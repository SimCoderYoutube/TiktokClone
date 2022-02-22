import { CHATS_SET } from '../constants';

const initialState = {
    list: [],
}

export const chat = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_SET:
            return {
                ...state,
                list: action.data
            }
        default:
            return state;
    }
}