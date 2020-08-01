# ref: Dom에 이름 달기

ref에 대하여 알기전에 먼저 index.html파일을 보자

```react
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

우리는 여기서 body태그의 id가 "root"인 div태그에 주목해야한다.

```react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

그리고 index.js에서는 id가 root인 요소에 리엑트 컴포넌트를 렌더링하라는 코드가 있다.

이렇게 HTML에서 id를 사용하여 DOM에 이름을 다는 것 처럼

리엑트 프로젝트 내부에서 이름을 다는 방법이 있는데 그것이 바로 ref이다.



## 어떨 때 ref를 사용해야 할까?

바로 **DOM을 꼭 직접적으로 건드려야 할 때** 이다.

바닐라 JS와는 다르게 state가 있기에 우리는 DOM에 접근하지 않아도 구현할 수 잇다.

```react
import React, {Component} from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = e =>{
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () =>{
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        })
    }
    render(){
        return(
            <div>
                <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}/>
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}
export default ValidationSample;
```

```css
.success {
    background-color: lightgreen;
}
.failure {
    background-color: lightcoral;
}
```

이렇게 state만으로 간단한 코드를 작성할 수 있으나 state만으로 해결할 수 없는 기능이 있다.

* 특정 input에 포커스 주기

*  스크롤 박스 조작하기
*  Canvas요소에 그림 그리기 등

이 때는 어쩔 수 없이 DOM에 직접적으로 접근해야 하는데 이 때 ref를 사용한다.

## ref 사용

### 1. 콜백

ref를 만드는 가장 기본적인 방법은 콜백함수이다.

```react
<input ref={(ref)=>{this.input=ref}}/>
```

### 2. createRef

```react
const Sample = ()=>{
	input =React.createRef();
    return <input ref={this.input}/>
}
```

적용예시

```react
import React, {Component} from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
    state = {
        password : '',
        clicked : false,
        validated : false
    }
    handleChange = e =>{
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () =>{
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        });
        this.testSample.focus();
    }
    render(){
        return(
            <div>
                <input
                ref={(ref) => this.testSampleref}
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}/>
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}
export default ValidationSample;
```

## 컴포넌트에 이름달기

```react
<MyComponent
	ref = {(ref)=>{this.myCOmponentT1 = ref}}
/>
```

이렇게 한다면 컴포넌트 내부에 있는 ref에도 접근할 수 있다.

## 스크롤 박스 테스트

```react
import React, {Component} from 'react';

class ScrollBox extends Component{
    render(){
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overFlow:'auto',
            position: 'relative'
        }
        const innerStyle = {
            width : '100%',
            height : '650px',
            background:'linear-gradient(white, black)'
        }
        return(
            <div
            style={style}
            ref={(ref)=>this.box=ref}>
                <div style={innerStyle}></div>
            </div>
        )
    }
}
export default ScrollBox;
```



## 컴포넌트에 메서드 생성

```react
import React, {Component} from 'react';

class ScrollBox extends Component{
    scrollToBottom = ()=>{
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight-clientHeight;
    }
    render(){
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow:'auto',
            position: 'relative'
        };
        const innerStyle = {
            width : '100%',
            height : '650px',
            background:'linear-gradient(white, black)'
        };
        return(
            <div
            style={style}
            ref={(ref)=>this.box=ref}>
                <div style={innerStyle}/>
            </div>
        )
    }
}

export default ScrollBox;
```

# 정리

컴포넌트 내부에서 dom에 직접 접근할 떄에는 ref를 활용하지만 먼저 활용하지 않아도 되는지를 체크

컴포넌트끼리 데이터를 교류할 때에는 부모 <-> 자식흐름으로 교류해야함

함수형 컴포넌트에서는 useRef라는 hooks를 활용함