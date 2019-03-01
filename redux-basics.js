const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
	counter: 0
}
// Reducer
const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return {
				// copy the whole state
				...state,
				// and overwrite counter, the property you want to change
				counter: state.counter + 1
			}
			case 'ADD':
				return {
					// copy the whole state
					...state,
					// and overwrite counter, the property you want to change
					counter: state.counter +  action.value
				}

		default:
			return state;
	}
}

// Store
const store = createStore(rootReducer)

// getState() shows the state from the store
console.log('store.getState()', store.getState())

// Subscription
// subscribe is a function that is executed evrytime the state is updated
// so when the action reach the reducer
// subscription has to be right after the store was created
store.subscribe(() => {
	console.log('Subscription', store.getState())
});

// Dispatching Action
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'ADD', value: 10})
console.log('store.getState()', store.getState())

