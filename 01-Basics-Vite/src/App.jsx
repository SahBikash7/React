import Intro from "./Intro";
function App() {
  return (
    // We cannot return multiple elements :
    <>
      <Intro />
      <h1>Hello World | Bikash</h1>
    </>

    // We had to wrap the elements into a single <div></div> every time we return since we cannot return more than 1 element.As a result the fragment was made :
    // <> ... </> is known as fragments.
  );
}
export default App;
