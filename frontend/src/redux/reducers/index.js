import { combineReducers } from "redux"
import { auth } from "./auth";
import { posts } from "./posts";

const Reducers = combineReducers({
    auth,
    posts
})

export default Reducers;
