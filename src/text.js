import React, {Component} from 'react';

export default class Text extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.params);
    }
    
    render() {
        return (<div style={{width:'100%',height:'100%',background:'red'}}>text</div>);
    }
}