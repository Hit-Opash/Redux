import {createStore} from "redux"
import rootReduces from "./reducers"

const store = createStore(rootReduces,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;