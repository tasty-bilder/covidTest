import React, { Component } from 'react';
import '../App.css';

class Ready extends Component {
  render(){
    return (
        <div className="image_btn">
            <label className="image_in" for="file_load">사진을 선택하세요</label> 
            <input type="file" id="file_load" accept="image/*"
            onChange={function(e){
              e.preventDefault();
              this.props.onChangePage(e);
            }.bind(this)}></input>
        </div>
    );
  }
}

export default Ready;
