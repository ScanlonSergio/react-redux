// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import counterSlice from './counter';

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export default store;


// using redux without redux/toolkit
// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             show: state.show
//         }
//     }
//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + 5,
//             show: state.show
//         }
//     }
//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             show: state.show
//         }
//     }
//     if(action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             show: !state.show
//         }
//     }
//     return state;
// }
