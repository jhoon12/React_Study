# rcontext API

## 왜 사용하는가?

우리가 프로젝트를 사용하다 보면 컴포넌트간의 데이터를 props로 전달하게 된다. 그렇기 때문에 컴포넌트가 여기저기 필요한 데이터가 있을 때 주로 최상위컴포넌트의 state에 넣어서 관리한다.이 때 컴포넌트가 늘어나면 여러개의 컴포넌트를 거쳐야하는 불편함이 존재한다. 따라서 우리는 context API를 사용하여 이를 해결할 수 있다.



# provider

```react
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './Context/color';

function App() {
  return (
    <ColorContext.Provider value={{color:'red'}}>
         <div>
          <ColorBox/>
        </div>
    </ColorContext.Provider>
  );
}

export default App;

```

우리가 createContext함수를 사용할 때에는 파라미터로 Context의 기본값을 넣어주었다.
이 기본값은 Provider를 사용하지 않았을 때만 사용된다

만약 provider를 사용했는데 value값을 명시하지 않았다면 아래와 같이 오류가난다.

```react
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './Context/color';

function App() {
  return (
    <ColorContext.Provider>
         <div>
          <ColorBox/>
        </div>
    </ColorContext.Provider>
  );
}

export default App;

```

# 동적 Context 사용하기

지금까진 Context를 고정적인 값만 사용 가능했다. 하지만 이것을 동적으로 사용가능하다.

아래와 같이 코드를 작성해보자

```react
//color.js
import React,{ createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: { setColor: () => {}, setSubcolor: () => {} },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;
export { ColorProvider, ColorConsumer };
export default ColorContext;

```

```react
//App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './Context/color';

function App() {
  return (
    <ColorProvider>
          <ColorBox/>
        </ColorProvider>
  );
}

export default App;

```

```react
//colorBOX.js
import React from "react";
import { ColorConsumer } from "../Context/color";
import ColorContext from "../Context/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: "74px",
              height: "64px",
              background: value.state.color,
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subcolor,
            }}
          ></div>
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;

```

쉽게 설명하자면 color.js에서 createContext로 ColorContext라는 Context를 만들어 준다.
ColorProvider컴포넌트에서는 하위 요소들을 children으로 받고, value라는 객체에 새로운 값을 넣어준 후에 그 value값으로 ColorContext의 value를 초기화 시켜주고, 나머지 하위요소들을 childrenProps를 통해 보여준다.

그에따라 자연스레 APP컴포넌트에서는 기존에 있던 provider를 ColorProvider로 대체 할 수 있다.(ColorProvider가 Provider를 리턴하기 때문에)

그리고 이에 맞게 ColorBox의 내부도 수정해주면 위와같은 코드가 된다.

비구조화할당을 이용하면 다음과 같은 코드도 작성 가능하다.

```react
import React from "react";
import { ColorConsumer } from "../Context/color";
import ColorContext from "../Context/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({state}) => (
        <>
          <div
            style={{
              width: "74px",
              height: "64px",
              background: state.color,
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          ></div>
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;

```

## 색상 선택 컴포넌트 만들기

context의 actions에 넣어준 함수를 호출하는 컴포넌트를 만들어보자

```react
/SelectColors.js
import React from 'react';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = ()=>{
    return(
        <div>
            <h2>색상을 선택하세요</h2>
            <div style={{display:'flex'}}>
                {colors.map(color => (
                    <div
                        key={color}
                        style={{
                            background: color,
                            width: '24px',
                            height:'24px',
                            cursor:'pointer'
                        }}></div>
                ))}
            </div>
            <hr/>
        </div>
    )
}

export default SelectColors
```

이제 클릭시 색이 변하게 코드를 수정해보자

```react
import React from "react";
import { ColorConsumer } from "../Context/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;

```

# Consumer 대신 Hook 또는 static contextType 사용하기

useContext라는 Hook을 사용하면 Context를 아주 편하게 사용할 수 있다.

```react
import React, { useContext } from "react";
import { ColorConsumer } from "../Context/color";
import ColorContext from "../Context/color";

const ColorBox = () => {
  const {state} = useContext(ColorContext);
  return (
        <>
          <div
            style={{
              width: "74px",
              height: "64px",
              background: state.color,
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          ></div>
        </>
  );
};

export default ColorBox;

```

# 정리

기존에 상태를 공유할 교류할 때에는 무조건 부모->자식 흐름으로 props를 통해 전달했다.
이제는 ContextAPI를 통해 더욱 쉽게 상태를 교류할 수 있다.
전역적으로 여기저기서 사용되는 상태가 있고, 컴포넌트의 개수가 많다면 사용을 추천한다.
