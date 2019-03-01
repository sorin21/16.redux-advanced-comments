import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { increment, add } from '../../actions/counterActions';
import { storeResult, deleteResult } from '../../actions/resultActions';

class Counter extends Component {
  state = {
    counter: 0,
    results: []
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => { return { counter: prevState.counter + 1 } })
        break;
      case 'dec':
        this.setState((prevState) => { return { counter: prevState.counter - 1 } })
        break;
      case 'add':
        this.setState((prevState) => { return { counter: prevState.counter + value } })
        break;
      case 'sub':
        this.setState((prevState) => { return { counter: prevState.counter - value } })
        break;
    }
  }

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Result</button>
        <ul>
          {this.props.results.map((strResult) => {
            return <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter.counter,
    results: state.results.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onAdd: () => dispatch(add()),
    onStoreResult: (counter) => dispatch(storeResult(counter)),
    onDeleteResult: (id) => dispatch(deleteResult(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);