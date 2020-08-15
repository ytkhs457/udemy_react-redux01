import React, { Component } from 'react';
import { connect } from 'react-redux'

import { INCREMENT, DECREMENT } from '../actions'

class App extends Component {
  render () {
    const props = this.props;
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.INCREMENT}>+1</button>
        <button onClick={props.DECREMENT}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value });
// const mapDispatchToProps = dispatch => ({
  // increment: () => dispatch(increment()),
  // decrement: () => dispatch(decrement()),
// });
const mapDispatchToProps = { increment, decrement };


export default connect(mapStateToProps. mapDispatchToProps)(App);

export default App;
