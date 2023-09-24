import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        toggleDiv: toggleDivReducer,
}
})
export default store;