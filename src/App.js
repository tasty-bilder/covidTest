import React, { Component } from 'react';
import './App.css';

import Subject from "./components/Subject"
import Image_prieview from "./components/Image_prieview"
import Ready from "./components/Ready"
import Start from "./components/Start"
import Answer from "./components/Answer"
import End from "./components/End"

import basic_image from './imgs/face.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'ready',
      value: 0,
      count: 0,
      image_src: basic_image,
      comment: null,
      question: [//100점 만점 기준
        {id:17 ,quest:'최근에 보건소에서 진단 받은적이 있습니까?'},
        {id:15 ,quest:'몸에 열이 나거나, 심한 기침을 한적이 있습니까?'},
        {id:14 ,quest:'당신의 주변에 확진자가 있습니까?'},
        {id:11 ,quest:'종교 활동을 하고 있나요?'},
        {id:10 ,quest:'최근 여행 혹은 인구가 밀집된 지역을 방문한 적이 있나요?'},
        {id:9 ,quest:'주변 지인 혹은 직장 동료와의 모임을 자주하나요?'},
        {id:9 ,quest:'잠깐 자리를 이동할때 마스크 착용이 귀찮아서 그냥 간적이 있나요?'},
        {id:6 ,quest:'외출 후 귀가시 손씻는 것을 귀찮아 한적 있나요?'},
        {id:3 ,quest:'물건을 구매할때 온라인 보다 오프라인을 선호 하시나요?'},
        {id:3 ,quest:'흡연을 하십니까?'},
        {id:3 ,quest:'음주를 하시나요?'},
      ]
    }
  }

  render(){
    let _component = null;
    let _imagepreview = null;
    if(this.state.mode === 'ready'){
      _imagepreview =  <Image_prieview image={this.state.image_src}></Image_prieview>;
      _component = <Ready
      onChangePage = {function(e){
        console.log(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () =>{this.setState({image_src: reader.result, mode: 'start'})}
      }.bind(this)}
      ></Ready>;
    }
    else if(this.state.mode === 'start'){
      _imagepreview =  <Image_prieview image={this.state.image_src}></Image_prieview>;
      _component = <Start
      onChangePage = {function(e){
        this.setState({mode: 'answer'})
      }.bind(this)}></Start>
    }
    else if(this.state.mode === 'answer'){
      let _comment = null;
      _imagepreview =  <Image_prieview image={this.state.image_src}></Image_prieview>;
      _component = <Answer
      desc = {this.state.question[this.state.count].quest}
      onChangePage = {function(e){
        if(e){
          let _value = this.state.value + this.state.question[this.state.count].id;
          this.setState({value : _value})
        }
        this.setState({count : this.state.count + 1})
        if(this.state.count === this.state.question.length-1){
          if(this.state.value > 90){_comment = '당신은 코로나에 감염될 확률이 상당히 높습니다. 위험하네요.';}
          else if(this.state.value > 70 && this.state.value <= 90){_comment = '코로나에 감염될 확률이 있습니다. 조심하세요.';}
          else if(this.state.value > 50 && this.state.value <= 70){_comment = '일반 사람보다 감염될 확률이 있습니다.';}
          else if(this.state.value > 30 && this.state.value <= 50){_comment = '일반 사람보다 감염될 확률은 낮지만 , 조금더 신경 써야합니다.';}
          else if(this.state.value > 10 && this.state.value <= 30){_comment = '코로나에 감염될 확률은 낮지만, 방심은 금물!';}
          else if(this.state.value > 0 && this.state.value <= 10){_comment = '당신은 무적이네요, 전쟁도 피해갈 상입니다.';}
          this.setState({mode: 'end', comment: _comment})
        }
      }.bind(this)}
      ></Answer>;
    }
    else if(this.state.mode === 'end'){
      _imagepreview = null;
      _component = <End
      title = {this.state.value}
      comment = {this.state.comment}
      desc = '당신의 코로나 활동 점수 입니다.'></End>
    }
    return (
      <div className="App">
        <Subject></Subject>
        {_imagepreview}
        {_component}
      </div>
    );
  }
}

export default App;
