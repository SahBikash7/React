import "./App.css";
import Card from "./components/Card";
function App() {
  // const myObj = {
  //   name: "Hritik",
  //   age: 34,
  // };
  // const myArr = [1, 2, 3, 4, 5];

  return (
    <>
      {/* class is a reserved keyword in .jsx so to use our CSS Wala class we use className and also remember that in .jsx file every html tag should be closed*/}
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      {/* <Card username="Bikash" someObject={myObj} someArr={myArr} /> */}
      {/* We cannot directly pass an array or object like we passed username into props of Card component  */}
      <Card username="Bikash" />
      <Card username="Aayush" />
      <Card />
    </>
  );
}

export default App;
