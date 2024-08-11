import React from "react";
import ReactDOM from "react-dom/client";

// JSX - is not HTML in JS.
// JSX - HTML like ir XML-like syntax

// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)

// React Element
// const heading = <h1 className="heading">Namaste React using JSX 🚀</h1>;

// React Component
// Class Based Component - OLD - JS classes
// Function Based Component - NEW - JS Functions

// React Functional Component
// const HeadingComponent = () => {
//   return <h1>Namaste React Functional Component</h1>;
// };

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX 🚀
//   </h1>
// );

// const HeadingComponent2 = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// );

const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component 🚀</h1>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(<HeadingComponent />);
