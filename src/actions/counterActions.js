export const INCREMENT = 'INCREMENT';
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const DECREMENT = 'DECREMENT';
export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const ADD = 'ADD';
export const add = (value) => {
  return {
    type: ADD,
    value: 5
  }
}

export const SUBSTRACT = 'SUBSTRACT';
export const substract = (value) => {
  return {
    type: SUBSTRACT,
    value: 5
  }
}

export const STORE_RESULT = 'STORE_RESULT';
export const storeResult = (counter) => {
  return {
    type: STORE_RESULT,
    value: counter
  }
}

export const DELETE_RESULT = 'DELETE_RESULT';
export const deleteResult = (value) => {
  return {
    type: DELETE_RESULT,
    payload: value
  }
}