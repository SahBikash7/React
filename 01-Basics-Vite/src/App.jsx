import Intro from "./Intro";
function App() {
  const username = "Bikash";
  return (
    // We cannot return multiple elements :
    <>
      <Intro />x
      <h1>Hello World | {username}</h1>
    </>

    // We had to wrap the elements into a single <div></div> every time we return since we cannot return more than 1 element.As a result the fragment was made :
    // <> ... </> is known as fragments.

    // {...Evaluated-Expression only here...}
    // So inside the curly braces we don't write JavaScript we only write the final output of the JavaScript...

    // Why we only write evaluated expression inside the curly braces??
    // => The things we return are at the end of the day converted into the object ( see main.jsx line 20-29 ) now we don't write the if-else or any JavaScript directly inside the object, yah u can write javaScript inside a function declared into the object but React here directly inserts the variable as it is inside the object so no JS is written inside the curly braces and hence it is called Evaluated-Expression.
  );
}
export default App;
