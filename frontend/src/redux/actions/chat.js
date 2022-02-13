import { CHATS_SET } from '../constants';

export const setChats = data => dispatch =>
    dispatch({ data, type: CHATS_SET })