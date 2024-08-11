import React from "react";
import ReactDOM from "react-dom/client";

// using React.createElement
// const head = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", {}, "This is h1"),
//   React.createElement("h2", {}, "This is h2"),
//   React.createElement("h3", {}, "This is h3"),
// ]);

// using same element by using JSX
// const headElement = (
//   <div className="title">
//     <h1>This is h1</h1>
//     <h2>This is h2</h2>
//     <h3>This is h3</h3>
//   </div>
// );

// using the functional components of the same with JSX
const HeadElement = () => {
  return (
    <div className="title">
      <h1>This is h1</h1>
      <h2>This is h2</h2>
      <h3>This is h3</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(head);
// root.render(headElement);
root.render(<HeadElement />);
