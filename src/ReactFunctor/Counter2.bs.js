'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Make(Param) {
  var reducer = function (state, action) {
    if (action) {
      return {
              count: Curry._2(Param.dec, state.count, 1)
            };
    } else {
      return {
              count: Curry._2(Param.inc, state.count, 1)
            };
    }
  };
  var Counter2$Make = function (Props) {
    var value = Props.value;
    var match = React.useReducer(reducer, {
          count: value
        });
    var dispatch = match[1];
    return React.createElement("main", undefined, "Simple counter with reducer", React.createElement("div", undefined, React.createElement("button", {
                        onClick: (function (param) {
                            return Curry._1(dispatch, /* Decrement */1);
                          })
                      }, "Decrement"), React.createElement("span", {
                        className: "counter"
                      }, Curry._1(Param.toString, match[0].count)), React.createElement("button", {
                        onClick: (function (param) {
                            return Curry._1(dispatch, /* Increment */0);
                          })
                      }, "Increment")));
  };
  return {
          reducer: reducer,
          make: Counter2$Make
        };
}

function reducer(state, action) {
  if (action) {
    return {
            count: state.count - 1 | 0
          };
  } else {
    return {
            count: state.count + 1 | 0
          };
  }
}

function Counter2$Make(Props) {
  var value = Props.value;
  var match = React.useReducer(reducer, {
        count: value
      });
  var dispatch = match[1];
  return React.createElement("main", undefined, "Simple counter with reducer", React.createElement("div", undefined, React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(dispatch, /* Decrement */1);
                        })
                    }, "Decrement"), React.createElement("span", {
                      className: "counter"
                    }, String(match[0].count)), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(dispatch, /* Increment */0);
                        })
                    }, "Increment")));
}

var IntValue = {
  reducer: reducer,
  make: Counter2$Make
};

function Counter2(Props) {
  return React.createElement(Counter2$Make, {
              value: 2
            });
}

var make = Counter2;

exports.Make = Make;
exports.IntValue = IntValue;
exports.make = make;
/* react Not a pure module */
