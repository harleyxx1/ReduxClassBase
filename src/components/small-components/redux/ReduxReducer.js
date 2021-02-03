import React from 'react';
import { combineReducers } from 'redux';

class ReduxReducer {
    constructor() {
        this.redux = {};
    }

    /**
     * Register the reducer.
     * 
     * @param {?String} name - The name we're gonna put to the reducer.
     * @param {?Function} reducer - The reducer.
     * @returns {Object}
     */
    register = (name, reducer) => {
        return this.redux[name] = reducer;
    }

    /**
     * Returns the combine reducer.
     * 
     * @returns {Object}
     */
    combineReducer = () => {
        return combineReducers(this.redux); 
    }
}

export default new ReduxReducer();
