import React from 'react';
import Highlight from 'react-highlight';
import '../../../node_modules/highlight.js/styles/monokai_sublime.css';

export default [
	<div>
		<h1>Intro to Flux</h1>
		<div>
			<div>Taylor Hakes</div>
		</div>
	</div>,
	<div>
		<input type="text" placeholder="Enter Text" />
		<Highlight className="html">
			{`<input type="text" id="myInput" placeholder="Enter Text" />`}
		</Highlight>
		<Highlight className="javascript">
			{
`var $input = $('#myInput');

// Get the value
var value = $input.val();

// Update the value
$input.val('new value');`
			}
		</Highlight>
	</div>,
	<div>
		<input type="text" placeholder="Enter Text" />
		<input type="text" placeholder="Enter Text" />
		<Highlight className="html">
			{
`<input type="text" id="myInput1" placeholder="Enter Text" />
<input type="text" id="myInput2" placeholder="Enter Text" />`
			}
		</Highlight>
		<Highlight className="javascript">
			{
`var $input1 = $('#myInput1');
var $input2 = $('#myInput2');
$input1.on('input', function() {
  $input2.val($input1.val());
});
$input2.on('input', function() {
  $input1.val($input2.val());
});`
			}
		</Highlight>
	</div>,
	<div>
		<Highlight className="html">
			{

`<div ng-controller="myCtrl">
  <input type="text" model="myInput" placeholder="Enter Text" />
  <input type="text" model="myInput" placeholder="Enter Text" />
</div>`
			}
		</Highlight>
		<Highlight className="javascript">
			{
`app.controller('myCtrl', function($scope) {
  $scope.myInput = "";
});`
			}
		</Highlight>
	</div>,
	<div>
		<input type="text" placeholder="Enter Text" />
		<button type="button">Submit</button>
		<Highlight className="html">
			{

`<div ng-controller="myCtrl">
  <input type="text" model="myInput" placeholder="Enter Text" />
  <button ngClick="onSubmit()">Submit</button>
</div>`
			}
		</Highlight>
		<Highlight className="javascript">
			{
`app.controller('myCtrl', function($scope) {
  $scope.onSubmit = function onSubmit() {

    // Do something AJAX
    myApi(function(result) {
       $score.myInput = result;
    });
  };
  $scope.myInput = "";
});`
			}
		</Highlight>
	</div>,
	<div>
		<img src="img/mvc.svg" />
	</div>,
	<div>
		<img src="img/multi-mvc.svg" />
	</div>,
	<div>
		<img src="img/flux.svg" />
	</div>,
	<div>
		<img src="img/multi-flux.svg" />
	</div>,
	<div>
		<img src="img/flux.svg" />
	</div>,
	<div>
		<div>Action</div>
		<Highlight className="javascript">
			{
`function inputChanged(value) {
  return {
    type: 'INPUT_CHANGED',
    value: value
  };
};`
			}
		</Highlight>

		<Highlight className="javascript">
			{
				`dispatch(inputChanged(value));`
			}
		</Highlight>
	</div>,
	<div>
		<div>Dispatcher/Store</div>
		<Highlight className="javascript">
			{
`var currentState = storeFn(undefined, {type: 'INIT'}),
  listeners = [],
  storeFn;

function dispatch(action) {
  currentState = storeFn(currentState, action);
  listeners.forEach(listener => listener());
}

function getState() {
  return currentState;
}

function subscribe(listener) {
  listeners.push(listener);

  return function unsubscribe() {
    var index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}`
			}
		</Highlight>
	</div>,
	<div>
		<div>Store Function</div>
		<Highlight className="javascript">
			{
`function storeFn(oldState, action) {
  oldState = typeof oldState === 'undefined' ? '' : oldState;

  switch (action.type) {
    case 'INPUT_CHANGED':
      return action.value;
    default:
      return oldState;
  }
}`
			}
		</Highlight>
	</div>,
	<div>
		<div>View</div>
		<Highlight>
			{
`var MyInput = React.createClass({
  getInitialState() {
    return {
      value: getState()
    };
  },
  componentDidMount: function () {
    subscribe(this.onStoreChange);
  },
  onStoreChange: function() {
    this.setState({
      value: getState()
    });
  },
  handleChange: function(e) {
    dispatch(inputChanged(e.target.value));
  },
  render: function () {
    return (
      <input type="text"
      value={this.state.value}
      onChange={this.handleChange} />
    );
  }
});`
			}
		</Highlight>
	</div>,
	<div style={{fontSize: '3rem'}}>
		<ul>
			<li>Redux</li>
			<li>Nuclear.js</li>
			<li>Alt</li>
			<li>Facebook Flux</li>
			<li>Fluxible by Yahoo</li>
			<li>Reflux</li>
			<li>Flummox</li>
			<li>Marty.js</li>
			<li>McFly</li>
			<li>Lux</li>
			<li>Material Flux</li>
			<li>Fluxette</li>
		</ul>
		<a href="https://github.com/voronianski/flux-comparison">Flux Comparison</a>
	</div>,
	<div>
		<div>
			<a href="https://medium.com/@dan_abramov/the-evolution-of-flux-frameworks-6c16ad26bb31">Evolution of Flux Frameworks</a>
		</div>
		<div>
			Dan Abramov
		</div>
	</div>,
];
