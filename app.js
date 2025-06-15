/*
<div id="parent">
<div id ="child">
    <h1>
    I am a h1 tag"
    <h2>
    I am a h2 tag"
    
    </h2>



    </h1>
</div>

</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ])
);

const heading2 = React.createElement(
  "h2",
  { id: "heading" },
  "I am learning React"
);

const root = ReactDOM.createRoot(document.getElementById("root1"));

root.render(heading2);
root.render(parent);
console.log(parent);
