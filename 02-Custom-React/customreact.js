// when u render an element in react it makes a tree of the particular element and it also consists of a function which renders the element with its props into our html page

// This is the function which renders the react element and this function takes two arguments :
//  1."The element whihc we want to render."
//  2."The element of html where we want to render the react element."

function customRender(reactElement, root) {
  // ###-1(DRY not followed here)
  //   const domELement = document.createElement(reactElement.type);
  //   domELement.innerHTML = reactElement.children;
  //   domELement.setAttribute("href", reactElement.props.href);
  //   domELement.setAttribute("target", reactElement.props.target);
  //   root.appendChild(domELement);

  //   ###-2(Better Approach :)
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    // People used to write children inside the props so just for safety point of view , we do this :
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  root.appendChild(domElement);
}

// This is the rect element which we want to render :
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click To Open Google",
};

const root = document.getElementById("root");

customRender(reactElement, root);

/* So we do write <div><h1>Hello World</h1></div> as the html element inside the App function of  App.jsx  but react doesn't understand this html , so these are parsed into the tree like structutre by the babel of the react or vite depending upon what u r using and then these parsed element are rendered by the react rendering function. 

So the work of babel is to make the syntax for the coders more easy but at the core give react the tree structure of html by parsing it internally and it also does optimization.   */
