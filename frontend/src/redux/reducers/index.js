import { combineReducers } from "redux"
import { auth } from "./auth";
import { posts } from "./posts";
import { modal } from "./modal";
import { chat } from "./chat";

const Reducers = combineReducers({
    auth,
    posts,
    modal,
    chat
})

export default Reducers;
