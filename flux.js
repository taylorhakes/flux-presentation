import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const INPUT_CHANGE = 'INPUT_CHANGE';

// React component
class Counter extends React.Component {
	render(){
		const { value, onInputChange} = this.props;
		return (
			<div>
				<input type="text" value={value} onChange={onInputChange} />
			</div>
		);
	}
}

// Action:
function changeAction(value) {
	return {
		type: INPUT_CHANGE,
		value
	}
}

// Reducer
function inputReducer(state='', action) {
	switch(action.type){
		case INPUT_CHANGE:
			return action.value;
		default:
			return state;
	}
}

// Store:
let store = createStore(inputReducer);


function mapStateToProps(state)  {
	return {
		value: state.count
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onInputChange: (value) => dispatch(changeAction(value))
	};
}

let App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

React.render(
	<Provider store={store}>
		{() => <App />}
	</Provider>,
	document.getElementById('root')
);