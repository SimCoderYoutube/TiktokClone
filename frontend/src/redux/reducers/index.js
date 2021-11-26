import { combineReducers } from "redux"
import { auth } from "./auth";
import { posts } from "./posts";
import { modal } from "./modal";

const Reducers = combineReducers({
    auth,
    posts,
    modal
})

export default Reducers;
