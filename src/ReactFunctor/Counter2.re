module type ParamType = {
  type t;
  let name: string;
  let inc: (t, int) => t;
  let dec: (t, int) => t;
  let toString: t => React.element;
};

module Make = (Param: ParamType) => {
  type state = {count: Param.t};

  type action =
    | Increment
    | Decrement;

  let reducer = (state, action) =>
    switch (action) {
    | Increment => {count: Param.inc(state.count, 1)}
    | Decrement => {count: Param.dec(state.count, 1)}
    };

  [@react.component]
  let make = (~value: Param.t) => {
    let (state, dispatch) = React.useReducer(reducer, {count: value});

    <main>
      {React.string("Simple counter with reducer")}
      <div>
        <button onClick={_ => dispatch(Decrement)}>
          {React.string("Decrement")}
        </button>
        <span className="counter"> {Param.toString(state.count)} </span>
        <button onClick={_ => dispatch(Increment)}>
          {React.string("Increment")}
        </button>
      </div>
    </main>;
  };
};

module IntValue =
  Make({
    type t = int;
    let name = "Int";
    let inc = (t, int) => t + int;
    let dec = (t, int) => t - int;
    // let toInt = s => s->int_of_string;
    let toString = x => x->string_of_int->React.string;
  });

[@react.component]
let make = () => {
  <IntValue value=2 />;
};