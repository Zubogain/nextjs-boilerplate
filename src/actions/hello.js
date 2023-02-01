export const SET_HELLO = "SET_HELLO";

export const setHello = (text = "") => ({
  type: SET_HELLO,
  payload: text,
});
