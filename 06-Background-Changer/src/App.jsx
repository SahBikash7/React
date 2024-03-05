import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  /* It is not compulsory to use useState in App.jsx , u can directly use it in your Button.jsx i.e in your component but i wanted to try out how can we send the function , turns out we need to pass the function which changes the background color as a prop into our component and then we need to use that function which is inside the prop of our component  on the onclick event of the component which in our case is a button */

  const [color, setColor] = useState("#212121");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <Button buttonText="Red" clickedThenDo={() => setColor("red")} />
          <Button buttonText="Green" clickedThenDo={() => setColor("green")} />
          <Button buttonText="Blue" clickedThenDo={() => setColor("blue")} />
          <Button
            buttonText="Yellow"
            clickedThenDo={() => setColor("yellow")}
          />
          <Button buttonText="Pink" clickedThenDo={() => setColor("pink")} />
          <Button
            buttonText="Purple"
            clickedThenDo={() => setColor("purple")}
          />
          <Button
            buttonText="DarkRed"
            clickedThenDo={() => setColor("darkred")}
          />
          <Button
            buttonText="Magenta"
            clickedThenDo={() => setColor("magenta")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
