/* The problem was suppose we have a html structure as below :<
        <Dashboard>
            <Leftbar />
            <Rightbar>
                <Topbar />
                <Bottombar>
                    <Card />
                </Bottombar>
            </Rightbar>
        </Dashboard>

    Now this structure is being rendered through our App.jsx and if we want to pass a prop to our <Card /> component then as first we need to pass the prop from App.jsx and then the same prop to <Dashboard /> and then to <Rightbar /> and then <Bottombar /> and then to <Card /> but we know that excpet the card component , other component don't need that prop but only to pass it to the next child component we have to pass it to them.

    To solve it we have 1.context API and 2.State Management Libraries (redux and zustand) :

    1.Context API :
    The context API in React is a solution to this problem. Instead of passing the prop manually through each intermediate component, you can use context to provide the prop at a higher level in the component tree and consume it in the deeply nested component without having to explicitly pass it through all the intermediate components.

    Here's how you can use the context API to solve the prop drilling issue:
    1. Create a Context: First, you create a context using the createContext function from React.
    2. Provide the Context Value: Wrap your component tree with a provider component (<ContextProvider />) that sets the context value.
    3. Consume the Context Value: In the deeply nested component (<Card />), use the useContext hook to consume the context value.

*/

import React from "react";

// created a context :
const UserContext = React.createContext();

export default UserContext;
