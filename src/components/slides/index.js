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
		<img src="img/mvc.svg" />
	</div>,
	<div>
		<img src="img/flux.svg" />
	</div>,
	<div style={{fontSize: '2.2rem'}}>
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
	<div style={{fontSize: '2.2rem'}}>
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
$input1.on('change', function() {
  $input2.val($input1.val());
});
$input2.on('change', function() {
  $input1.val($input2.val());
});`
			}
		</Highlight>
	</div>
];
