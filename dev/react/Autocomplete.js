var React = require("react");

var Autocomplete = React.createClass({
	getInitialState: function() {
		return { filter: "", value: null };
	},
	getOptions: function() {
		return this.props.data
				.filter(a => a.text.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0)
				.map((e, i) => { 
					return <li onClick={this.setValue.bind(null, e)} key={i}>{e.text}</li> }
				);
	},
	setValue: function(item) {
		this.refs.textFilter.getDOMNode().value = item.text;
		this.setState({ value: item.id });
		if(!!this.props.onChange) {
			this.props.onChange(item.id);
		}
	},
	setFilter: function() {
		this.setState({ filter: this.refs.textFilter.getDOMNode().value, value: null });
	},
	setFocus: function() {
		this.refs.textFilter.getDOMNode().focus();

		var className = this.refs.suggestions.getDOMNode().className;
		if(className.indexOf("active") < 0) {
			this.refs.suggestions.getDOMNode().className = className + " active";
		}
	},
	componentWillMount: function() {
		if(!!this.props.selected) {
			this.setState({value: this.props.selected});
		}
	},
	unFocus: function() {
		var className = this.refs.suggestions.getDOMNode().className;
		if(className.indexOf("active") > 0) {
			setTimeout(() => { this.refs.suggestions.getDOMNode().className = className.replace("active", ""); }, 150)
		}
	},
	componentWillReceiveProps: function(next) {
		if(next.selected) {
			this.setState({value: next.selected});
			this.refs.textFilter.getDOMNode().value = next.data.filter(e => e.id == next.selected)[0].text;
			if(!!this.props.onChange) {
				this.props.onChange(next.selected);
			}
		}
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		if(nextProps.selected == this.props.selected && nextProps.data.length == this.props.data.length
				&& this.state.filter == nextState.filter) {
			return false;
		} else {
			return true;
		}
	},
	getDefaultValue: function() {
		if(!!this.props.selected)
			return this.props.data.filter(e => e.id == this.props.selected)[0].text;
		else {
			return "";
		}
	},
	render: function() {
		return (<div className="Autocomplete" onClick={this.setFocus}>
					<input onBlur={this.unFocus} ref="textFilter" onChange={this.setFilter} defaultValue={this.getDefaultValue()} />
					<ul ref="suggestions">
						{this.getOptions()}
					</ul>
				</div>);
	}
});

module.exports = Autocomplete;