- Redux is the core library and react-redux is the library for the wiring of react to use redux

- ReduxToolkit simplifies most of the works itself,ReduxToolkit is the more abstracted version of the core redux which does most of the works internally itself.

1. Every application has a single store which is known as single source of truth inside which we need a configure store which takes an object and inside the object we need to specify the reducers which can do the changes to the store.Basically the store needs the awareness of the reducers which can make changes to it.

2. Now me make reducers and the file consists of a naming convention to have name as "feature_nameSlice.js" and inside that we have to make slice with a method createSlice imported from "@reactjs/toolkit". Now to make a slice we usually need three things 1.name 2.initialState and 3.reducers

3. name and initialState are provided createSlice() in key-value pair and the reducers are defined in it also as a key-value pair.The reducers consists of {functionName(methodName) : Its Definition}.

4. we have access of state and as a parameter inside the definition of our methods inside reducers. State gives us the updated state value in the store and action gives us the access of the payload which we want to pass to the method as action.payload

5. We export each individual functionality because we don't know in which component we need which method or reducers if we have mutiple reducers.

6. We also export main source of reducer as we need in our store.

7. To send the data we have useDispatch() and to retrive the currentState of our store we use useSelector()
