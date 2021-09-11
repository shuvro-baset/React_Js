# React_Js
    * React is a JavaScript library for building user interfaces.
# Here are what I consider to be React prerequisites.
   * Basic familiarity with HTML & CSS.
   * Basic knowledge of JavaScript and programming.
   * Basic understanding of the DOM.
   * Familiarity with ES6 syntax and features.
   * Node.js and npm installed globally.
# todo: how to create/start react app. 
    - npx create-react-app my-app // create a new app and download required files
    - cd my-app // entering app directory
    - npm start // start app server.
# how react works
    - react works component based.
    - React creates a VIRTUAL DOM in memory.
    - Instead of manipulating the browser's DOM directly, 
    - React creates a virtual DOM in memory, 
    - where it does all the necessary manipulating, 
    - before making the changes in the browser DOM.
    - then changes only what needs to be changed

# react JSX
    *JSX stands for “JavaScript XML,” and it is a syntax extension to JavaScript based in ES6, the newest “version” of  JavaScript. JSX allows you to write HTML in React by converting HTML into React components, helping you to more easily create user interfaces for your web applications.
    * const element = <h1>Hello, world!</h1>;
    * It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what     the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

# react createElement 
    * React.CreateElement(type,props,children)
    * type - Type of the html element or component(Ex: h1,p,button...etc)
    * props - The properties object (Ex: {style:{color:'green'}} or className or event handlers etc.)
    * children - anything you need to pass between the dom elements.
    -- Example: React.createElement('h1', {style:{color:'green'}}, 'Hello World!')
# React Render to Dom 
    * ReactDom.render(element, DOMNode) - It takes a React element and render it to a DOM node.
    * Example: ReactDom.render(<App/>, document.getElementById('root'));
    * app.js(c1,c2.....) --> index.js --> index.html.