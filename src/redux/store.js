import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import cartCounter from "./middleware/cartCounter";
import rootReducer from "./reducers/rooteReducer";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter)));

export default store;
