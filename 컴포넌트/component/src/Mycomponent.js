import React from 'react';
import ProTypes from 'prop-types';

class Mycomponent = ({name,favoriteNumber,children}) => {
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

Mycomponent.defaultProps = {
  name: '기본 이름'
}

Mycomponent.prototypes = {
  name : ProTypes.string,
  favoriteNumber : ProTypes.number.isRequired
};

export default Mycomponent;
