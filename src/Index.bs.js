'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Counter$ReactFunctor = require("./ReactFunctor/Counter.bs.js");
var Counter2$ReactFunctor = require("./ReactFunctor/Counter2.bs.js");
var DummyModule$ReactFunctor = require("./PromiseHook/DummyModule.bs.js");
var ExampleStyles$ReactFunctor = require("./ExampleStyles.bs.js");
var BlinkingGreeting$ReactFunctor = require("./BlinkingGreeting/BlinkingGreeting.bs.js");
var FetchedDogPictures$ReactFunctor = require("./FetchedDogPictures/FetchedDogPictures.bs.js");
var ReducerFromReactJSDocs$ReactFunctor = require("./ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js");
var ReasonUsingJSUsingReason$ReactFunctor = require("./ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$ReactFunctor.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(BlinkingGreeting$ReactFunctor.make, {
          children: "Hello!"
        }), makeContainer("Blinking Greeting"));

ReactDom.render(React.createElement(Counter$ReactFunctor.make, {}), makeContainer("Counter"));

ReactDom.render(React.createElement(Counter2$ReactFunctor.make, {}), makeContainer("Counter2"));

DummyModule$ReactFunctor.make(undefined);

ReactDom.render(React.createElement(ReducerFromReactJSDocs$ReactFunctor.make, {}), makeContainer("Reducer From ReactJS Docs"));

ReactDom.render(React.createElement(ReducerFromReactJSDocs$ReactFunctor.make, {}), makeContainer("Reducer From ReactJS Docs"));

ReactDom.render(React.createElement(FetchedDogPictures$ReactFunctor.make, {}), makeContainer("Fetched Dog Pictures"));

ReactDom.render(React.createElement(ReasonUsingJSUsingReason$ReactFunctor.make, {}), makeContainer("Reason Using JS Using Reason"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
