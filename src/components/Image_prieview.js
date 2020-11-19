import React, { Component } from 'react';
import '../App.css';

class Image_prieview extends Component {
  render(){
    return (
      <div className="image_hold">
        <h2>여러분의 사진과 다양한 질의응답 을 통해 활동 점수를 분석합니다</h2>
        해당 테스트는 정확한 정보가 아닐 수 있습니다. 단순히 재미를 위해 즐겨주세요<p></p><br></br>
        해당 사이트는 계속해서 업데이트 중입니다.
        <img src= {this.props.image} className="upimage"></img>
      </div>
    );
  }
}

export default Image_prieview;
