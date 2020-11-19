import React, { Component } from 'react';
import '../App.css';

class Start extends Component {
  render(){
    return (
        <div>
            <button className="start_btn" onClick = {function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
            >테스트 시작하기</button>
        </div>
    );
  }
}

export default Start;
