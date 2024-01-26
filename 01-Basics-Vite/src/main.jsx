import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return <h3>Hello,This is Custom App!</h3>;
// }

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click To Open Google",
// };

// The reactElement doesn't work because tyo element lai render garna hamileh aafnai customRender banako them 02-Custom-React ma but here we are using the render of the react aaba yo render leh aafnai syntax haru expect garxa ,simply speaking hmro reactElement ko syntax react ko render method leh bujhena..

// const username = "Manish";
// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "Click To Visit Google!!!",
//   username
// );

//The reactElement works now because to render the reactElement  we are using the render of the react and now reactElement's syntax is as expected by the render of react.

// const anotherElement = (
//   <a href="https://facebook.com" target="_nothing">
//     Click To Visit Facebook
//   </a>
// );
// Also This Work

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
