'use strict';

var ReactFunctor$ReactFunctor = require("./ReactFunctor.bs.js");

function render(x) {
  return String(x);
}

var IntValue = ReactFunctor$ReactFunctor.Make({
      name: "Int",
      render: render
    });

exports.IntValue = IntValue;
/* IntValue Not a pure module */
