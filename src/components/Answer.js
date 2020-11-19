import React, { Component } from 'react';
import '../App.css';

class Answer extends Component {
  render(){
    return (
        <div className="answer_wrap">
            <label className="quest_label">{this.props.desc}</label>
            <div className="btn_wrap">
              <button className="true_btn" onClick = {function(e){
                e.preventDefault();
                this.props.onChangePage(true);
              }.bind(this)}>예</button>
              <button className="false_btn" onClick = {function(e){
                e.preventDefault();
                this.props.onChangePage(false);
              }.bind(this)}>아니오</button>
            </div>
        </div>
    );
  }
}

export default Answer;
