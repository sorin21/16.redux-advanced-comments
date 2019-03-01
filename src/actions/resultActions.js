export const STORE_RESULT = 'STORE_RESULT';
export const storeResult = (counter) => dispatch => {
  dispatch({
    type: STORE_RESULT,
    result: counter
  })
}

export const DELETE_RESULT = 'DELETE_RESULT';
export const deleteResult = (value) => {
  return {
    type: DELETE_RESULT,
    payload: value
  }
}