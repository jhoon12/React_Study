import React, { Component } from 'react';
import ProTypes from 'prop-types';

class Mycomponent extends Component{
  static defaultProps = {
    name: '기본 이름'
  }
  static ProTypes = {
    name : ProTypes.string,
    favoriteNumber :ProTypes.number.isRequired
  } 
  render(){
    const{name,favoriteNumber,children} = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        children의 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
export default Mycomponent;