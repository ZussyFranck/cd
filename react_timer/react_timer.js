'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({
    getInitialState: function() {
        console.log(this.props);
        return {
            time_elapsed: this.props.initialcount
        };
    },
    componentDidMount: function() {
        setInterval(this.secondpassed, 1000);
    },
    secondpassed: function() {
        this.setState({
            time_elapsed: this.state.time_elapsed + 1
        });
        //componentDidMount = quand objet est crée
        //this = objet Timer
        //getInitialState = à la création de l'élément
        //quand state change render est appelé
    },
    render: function() {
        return ( 
            <div> 
                Time elapsed is : {this.state.time_elapsed } 
            </div>
        );
    }
});
ReactDOM.render(
    <div>
    <Timer initialcount = {1} foo={2}/>
    <Timer initialcount = {2}/>
    </div>
, document.getElementById('container'));