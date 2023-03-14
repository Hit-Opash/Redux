import changeNumber from "./dataChange";
import { hit } from "./dataChange";

import {combineReducers} from "redux";

const rootReduces = combineReducers({
    changeNumber,hit
})

export default rootReduces;