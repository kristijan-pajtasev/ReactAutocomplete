var React = require("react");
var Autocomplete = require("./Autocomplete");

var data = [
	{ id: 1, text: "Jack" },
	{ id: 2, text: "John" },
	{ id: 3, text: "Johnny" },
	{ id: 4, text: "Mary" },
	{ id: 5, text: "Marco" },
	{ id: 6, text: "Ted" },
	{ id: 7, text: "Jared" },
	{ id: 8, text: "Nina" }
];

var Demo = React.createClass({ 
	getInitialState: function() {
		return { selected: 3 };
	},
	changeState: function() {
		this.setState({val: Math.random()});
	},
	setSelected: function() {
		this.setState({selected: 7})
	},
	getValue: function() {
		this.refs.getValue.getDOMNode().innerText = this.refs.ac.state.value;
	},
	liveUpdate: function(id) {
		this.refs.liveValue.getDOMNode().innerText = id;
	},
	render: function() {
		return <div>Hello, world
					<button onClick={this.changeState}>Change state</button>
					<button onClick={this.setSelected}>Set selected</button>
					<br />
					<div><button onClick={this.getValue}>Get value</button> <span ref="getValue"></span></div>
					<div>Live update: <span ref="liveValue"></span></div>
					<Autocomplete ref="ac" onChange={this.liveUpdate} selected={this.state.selected} data={data} />
					
				</div>;
	}
});

module.exports = Demo;