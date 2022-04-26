1. don't touch the dom. I will do it.
2. Build websites like lego blocks (different components..)
3. Unidirectional data flow

VirtualDom => a blueprint off real dom. 

* npm run start/ yarn start => this command run the application from package.json command scripts (react-scripts start)
* npm run build/ yarn build => this command make a build folder for the application and optimizes so that we can host the application. 

`note:` life cycle - initialize state -> render -> complete fetching data update state -> re-render.

* react makes a one css file. so how many css er create in a different component or pages that can access any other components or pages. so when we write a css and give a name of the class or id be sure all the names are relevant and unique.

* we can destructure the properties under the map. make a another curly braces and destructure the property and use it where it needed.

`SASS`
- yarn add sass / npm i sass

`Context Data`
- store data in a different places and pass it where we need. no need to props drilling.
- context can be nested. in that case arranges it as parent and child.

`Styled Component`
- npm install styled-component
- it's a component that contains styles as a component. the main useful thing to do is to make sure all the styles classes are unique.

