- we can create a react project using :
  "npx(nope package executer) create-react-app 01-basics-react"
  but this is not considered a efficient way because it is bulky i.e.
  It provides us with a lot of things which we don't even use in our project..

- So, the better way is to use Vite or Parcel
  We will use Vite:
  "npm create vite@latest"

- If we make our project using vite the node-modules are not installed so we need to install them whereas the project created by using "npx(nope package executer) create-react-app 01-basics-react" installs node-modulues too.

- React makes its own Virtual DOM

- To include The JS file into our webpage we need to use script tag , there is no other option but if we look into the index.html file of 01-basics-react ,we find that we never used script tag .
  Well, if we don't use the dependencies :"react-scripts": "5.0.1",
  automatically injects scripts into our index.html page

- Well, if we look into the dependencies of 01-Basics-Vite then we find that we don't have "react-scripts" in it so how js is added to index? Well it is directly added using the script tag in our index.html page.

# Default Configuration Of Vite:

- We need to make .jsx file if we are making any component
- We need to name the funcion with the First Letter as Capital
- We need to make fragments (A single element to return) since we can't return multiple elements
- Not compulsory but better to make the file name as first letter Capital except index.js

# Default Configuration Of create-react-app:

- Not compulsory to make .jsx file if we are making any component .js file can be used but better to name .jsx file
- We need to name the funcion with the First Letter as Capital
- We need to make fragments (A single element to return) since we can't return multiple elements
- Not compulsory but better to make the file name as first letter Capital except index.js
