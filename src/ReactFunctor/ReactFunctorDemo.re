
// module type ParamType = {
//   type t;
//   let name: string;
//   let render: t => ReasonReact.reactElement;
// };

// module Make = (Param: ParamType) => {
//   type state = {value: Param.t};
//   let component = ReasonReact.reducerComponent("Demo" ++ Param.name);
//   let make = (~value: Param.t, _) => {
//     ...component,
//     initialState: () => {value: value},
//     reducer: ((), _state) => ReasonReact.NoUpdate,
//     render: ({state}) =>
//       <div style={ReactDOMRe.Style.make(~fontSize="32px", ())}>
//         /* some markup */
//          {Param.render(state.value)} </div>,
//   };
// };
module IntValue =
  ReactFunctor.Make({
    type t = int;
    let name = "Int";
    let render = x => x->string_of_int->ReasonReact.string;
  });


// ReactDOMRe.renderToElementWithId(<IntValue value=2 />, "preview");
