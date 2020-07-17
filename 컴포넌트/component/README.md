# 컴포넌트

컴포넌트는 재사용이 가능한 최소한의 단위로 리엑트에서 사용자가 볼 수 있는 요소는 여러가지 컴포넌트로 구성되어있습니다. 

# 컴포넌트의 종류
1.[클래스형 컴포넌트](https://github.com/jhoon12/React/blob/master/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8/component/src/classComponent.js)

클래스형 컴포넌트에서는 render함수가 꼭 있어야 하며 그 안에서 보여주어야 할 JSX를 반환해야 합니다.

2.[함수형 컴포넌트](https://github.com/jhoon12/React/blob/master/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8/component/src/functionComponent.js_4)

함수형 컴포넌트는 선언이 편하고, 파일크기가 더 작지만 state와 라이프사이클 API의 사용이 불가능하다(Hooks라는 기능이 도입되며 해결).

# props
properties의 줄인 표현으로 **컴포넌트 속성을 설정할 때 사용하는 요소** 입니다.

# JSX 내부에서 props 렌더링

Mycomponent를 수정하여 name이라는 props 랜더링하기
```
import React from 'react';

const Mycomponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다.
    </div>
  );
}

export default Mycomponent;


export default Mycomponent;
```

# props값 지정하기

```
import React from 'react';
import Mycomponent from './Mycomponent';

const App= ()=>{
  return (
    <div>
        <Mycomponent name="React"></Mycomponent>
    </div>
  );
}

export default App;

```

# props 기본값 설정 

```
import React from 'react';

const Mycomponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다.
    </div>
  );
}

Mycomponent.defaultProps = {
  name: '기본 이름'
}

export default Mycomponent;
```
# 태그 사이의 내용을 보여주는 children

컴포넌트 태그 사이의 내용을 보여주는 props입니다.
```
import React from 'react';
import Mycomponent from './Mycomponent';

const App= ()=>{
  return (
    <div>
        <Mycomponent >리엑트</Mycomponent>
    </div>
  );
}

export default App;
```

```
import React from 'react';

const Mycomponent = (props) => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다.
      children의 값은 {props.children}
      입니다.
    </div>
  );
}

Mycomponent.defaultProps = {
  name: '기본 이름'
}

export default Mycomponent;
```


 # 비구조화 할당 문법을 통해 props내부 값 추출
 
```
import React from 'react';

const Mycomponent = ({name,children}) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      children의 값은 {children}
      입니다.
    </div>
  );
}

Mycomponent.defaultProps = {
  name: '기본 이름'
}

export default Mycomponent;

```

# propTypes를 통한 props 검증

컴포넌트의 필수 props를 지정할 때에는 propsTypes를 사용한다.
```
import React from 'react';
import ProTypes from 'prop-types';

const Mycomponent = ({name,children}) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      children의 값은 {children}
      입니다.
    </div>
  );
}

Mycomponent.defaultProps = {
  name: '기본 이름'
}

Mycomponent.prototypes = {
  name : ProTypes.string
};

export default Mycomponent;

```
위와 같이 컴포넌트가 설정한 props가 propsTypes에서 지정한 형태와 일치하지 않으면 console에 오류가 출력됨
따라서 APP.js의 name값을 수정해주면 됨

# isRequired를 사용하여 필수 propTypes 설정
  isRequired를 사용하면 경고메세지를 띄워줌
  
  ```
  import React from 'react';
import Mycomponent from './Mycomponent';

const App= ()=>{
  return (
    <div>
        <Mycomponent name="리엑트" favoriteNumber={'asdk'}>리엑트</Mycomponent>
    </div>
  );
}

export default App;
```

```
import React from 'react';
import ProTypes from 'prop-types';

const Mycomponent = ({name,favoriteNumber,children}) => {
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
```

# 클래스형 컴포넌트에서 props 사용방법
 
