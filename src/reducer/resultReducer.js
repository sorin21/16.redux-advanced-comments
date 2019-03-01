import { STORE_RESULT, DELETE_RESULT } from '../actions/resultActions';

const initialState = {
  results: []
}

const reducerResult = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        // get a value from the global state, the counter need it here, as an action payload
        // SO
        // in Counter.js we dispatch action storeResult() that takes counter like argument
        // this storeResult() comes in Counter.js as onStoreResult() where we pass the counter
        // that comes from this.props.ctr
        // results: state.results.concat({ id: new Date(), value: state.counter })
        // After the action storeResult() is dispatched goes to reducer
        // this action creator has it's body in resultActions.js, where receive the counter, like argument
        // and put it in the payload named result
        // Then here in reducer we take that result from action.result and in this way the store is updated
        results: state.results.concat({ id: new Date(), value: action.result })
      }
    case DELETE_RESULT:
      // Here we have alredy in results the object that we concat above, that has id and value
      // So we can compare the ids from results that don't match the id that comes from payload
      // This id from payload comes from this action DELETE_RESULT, that receive the  id in the value argument
      // and passes to payload key
      // This payload id comes from Counter.js from this.props.onDeleteResult() that has like parameter strResult.id
      // the id from results that user clicks to delete it.
      const newArray = state.results.filter((result) => result.id !== action.payload);
      return {
        ...state,
        results: newArray
      }

    default:
      return state;
  }
}

export default reducerResult;