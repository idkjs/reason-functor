'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/legacy/ReasonReact.bs.js");

var component = ReasonReact.reducerComponent("Counter");

function make(_children) {
  return {
          debugName: component.debugName,
          reactClassInternal: component.reactClassInternal,
          handedOffState: component.handedOffState,
          willReceiveProps: component.willReceiveProps,
          didMount: component.didMount,
          didUpdate: component.didUpdate,
          willUnmount: component.willUnmount,
          willUpdate: component.willUpdate,
          shouldUpdate: component.shouldUpdate,
          render: (function (self) {
              var countMsg = "Count: " + String(self.state);
              return React.createElement("div", undefined, React.createElement("p", undefined, countMsg), React.createElement("button", {
                              onClick: (function (_event) {
                                  return Curry._1(self.send, /* Add */0);
                                })
                            }, "Add"));
            }),
          initialState: (function (param) {
              return 0;
            }),
          retainedProps: component.retainedProps,
          reducer: (function (action, state) {
              return {
                      TAG: /* Update */0,
                      _0: state + 1 | 0
                    };
            }),
          jsElementWrapped: component.jsElementWrapped
        };
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
