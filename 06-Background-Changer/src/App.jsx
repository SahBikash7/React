import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
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
