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
	render: function() {
		return <div>Hello, world
					<Autocomplete selected={3} data={data} />
				</div>;
	}
});

module.exports = Demo;