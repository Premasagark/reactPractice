const parent = React.createElement("div",{ id: "parent" },[
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1",{ id: "child1", key: "child1" },"I am h1  child"),
    React.createElement("h2",{ id: "child2", key: "child2" },"I am h2  child"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1",{ id: "child1", key: "child1" },"I am h1  child"),
    React.createElement("h2",{ id: "child2", key: "child2" },"I am h2  child"),
  ])
]);

console.log(parent); // return object

const heading = React.createElement("h1",{ id: "heading" },"Hello from React");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
