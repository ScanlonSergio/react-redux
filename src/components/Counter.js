// imports for functional components redux.
import React from 'react';

import { counterActions } from '../store/counter';
import { useSelector, useDispatch } from 'react-redux';


// imports for class components redux.
// import React, { Component } from 'react';
// import { connect } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.show);

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }
  
    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            { show&& <div className={classes.value}>{counter}</div> }
            <div>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;




// Using redux in class based components

// class Counter extends Component {

//   incrementHandler() {
//       this.props.increment();
//   }

//   decrementHandler() {
//       this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//       return (
//           <main className={classes.counter}>
//               <h1>Redux Counter</h1>
//               <div className={classes.value}>{this.props.counter}</div>
//               <div>
//                   <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                   <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//               </div>
//               <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//           </main>
//       );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
