import { SET_HELLO } from "@Actions/hello";

const initialState = {
  text: "Lorem ipsum dolor sit"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_HELLO:
      return { ...state, text: action.payload };
    default:
      return state;
  }
}
