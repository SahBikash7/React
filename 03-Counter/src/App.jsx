import { useState } from "react";
import "./App.css";

function App() {
  // Using useState hook:
  const [counter, setCounter] = useState(0);

  // useState hook returns two values in an array: one is counter and the another is a method(function) called setCounter.Remember that counter and setCounter are the conventional names...

  // let counter = 0;

  const increaseValue = () => {
    // counter += 1;
    // setCounter(counter);

    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);

    // Even if we write multiple setCounter(counter + 1), the value of counter only increases by 1 on 1 click because useState sends each and every updates in variables to UI in batches.So this setCounter(counter +1) is updating the same counter having value 15 each time.These multiple setCounter is handled as a batch.

    // If we want to update the counter by using multiple setCounter which is not an optimized approach but regardless then we can use
    // Every states like setCounter() for example accepts a callBack within it.
    // The value which comes through callBack actually comes by calling the value after the completion of the previous setCounter().
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);

    // Better to use :
    // setCounter(counter + 3);
  };
  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello, This is Counter</h1>
      <h2>Counter Value : {counter}</h2>

      {/* The <h2>Counter Value : {counter}</h2> is not getting updated although the value of counter is getting updated... 
      The UI updation is handled by react.
      Here comes the role of hook*/}

      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
