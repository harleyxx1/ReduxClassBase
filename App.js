import React from 'react'
import { BaseApp } from './src/components/app';
import { ReactReducer } from './src/components/small-components/redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore(ReactReducer.combineReducer());

const App = () => {
  return (
    <Provider store = {store}>
      <BaseApp />
    </Provider>
  )
}

export default App
