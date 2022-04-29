`Redux`
- yarn add redux react-redux @type/react-redux (install redux)
- one store globally (storing all state globally)
- in reducer we store our storage. reducer will do task as describe.(add, remove.. as action type.)
- action will dispatch to the reducer. after doing the job by reducer as action dispatched then it will restore the state storage.

# redux file structure
./redux
    /actions
    /reducers
    .store.js

- in dispatch we send action type and data to the reducer
- we can pass the data in payload object
- copy previous state in the reducer and update the state with new state data
- export store from store.js
- import store to the app and wrap it.

`# Redux-Thunk`
- we will use it for asynchronous behaviour
- it's kind of middleware.
- if action is asynchronous then we should use a callback function. 

`# redux-persist`
- yarn add redux-persist
- after install the package we will import persistStore, persistReducer from 'redux-persist'
- import storage from 'redux-persist/lib/storage'
- const persistReducer = persistReducer(persistConfig, rootReducer)
- import persist in the store 
- persistGate wrap in the application

`# Redux-Toolkit`
- it's a easy way(like a boilerplate)
- yarn add @reduxJs/toolkit react-redux