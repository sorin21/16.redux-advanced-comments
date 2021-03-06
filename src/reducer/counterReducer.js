import { INCREMENT, ADD } from '../actions/counterActions';

const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }

    default:
      return state;
  }
};

export default reducer;