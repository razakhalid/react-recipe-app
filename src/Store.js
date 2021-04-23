import { getDefaultNormalizer } from "@testing-library/dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux/thunk";

const Store = createStore();

export default Store;
