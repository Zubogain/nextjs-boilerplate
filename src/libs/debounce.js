import { debounce } from "lodash";

// Debounce data for redux actions
const _debounceInput = debounce((dispatch, action, payload) => {
  dispatch(action(payload));
}, 100);

// Debounce input wrapper for redux actions
export default (dispatch, action, propName) => (event) => {
  const payload = {};
  payload[propName] = event.currentTarget.value;
  _debounceInput(dispatch, action, payload);
};
