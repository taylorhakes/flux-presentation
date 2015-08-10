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
$input.val('update');`
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
  	// Do something ajax
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
		<img src="img/flux-facebook.png" />
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
	</div>
];
