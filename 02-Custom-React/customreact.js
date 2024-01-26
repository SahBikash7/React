function customRender(reactElement, root) {
  // ###-1
  //   const domELement = document.createElement(reactElement.type);
  //   domELement.innerHTML = reactElement.children;
  //   domELement.setAttribute("href", reactElement.props.href);
  //   domELement.setAttribute("target", reactElement.props.target);
  //   root.appendChild(domELement);

  //   ###-2
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  root.appendChild(domElement);
}

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
