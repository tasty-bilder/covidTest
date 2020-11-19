import React, { Component } from 'react';
import '../App.css';

class End extends Component {
  render(){
    return (
        <div className="end_wrap">
            <h3>{this.props.desc}</h3>
            <h1>{this.props.title}</h1>
            <h2>{this.props.comment}</h2>
        </div>
    );
  }
}

export default End;
