'use strict';
    
var React = require('react');
var ReactDOM = require('react-dom');
    
var ExampleApplication = React.createClass({
    render: function() {
        return <p>{this.props.message}</p>;
    }
});
    
ReactDOM.render(
    <ExampleApplication message="Hello world" />,
    document.getElementById('container')
);