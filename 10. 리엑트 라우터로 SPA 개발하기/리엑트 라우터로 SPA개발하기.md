# 리엑트 라우터로 SPA개발하기

# SPA란?



Single Page Application의 약자로 한 개의 페이지로 이루어진 애플리케이션을 의미합니다.

기존에는 사용자가 다른 페이지로 이동할 때마다  새로운 html을 받아 오고,
페이지를 로딩할 때 마다 서버에서 리소스를 전달받아 해석된 뒤 화면에 보여주었습니다.

이렇게 웹 페이지를 구성하게되면 새로운 화면을 보여주어야 할 때마다  서버 측에서 모든 뷰를 준비한다면 성능상의 문제가 발생합니다.
애플리케이션 내에서 화면 전환이 일어날 때마다 html을 계속 서버에 새로 요청하면 사용자의 인터페이스에서 사용하고 있던 상태를 유지하는 것도 번거롭고, 바뀌지 않는 부분까지 새로 불러오기 때문에 비효율적입니다.

그래서 리엑트에서는 뷰 렌더링을 사용자의 브라우저가 담당하고, 사용자와의 인터렉션을 통해 필요한 부분만 js를 사용하여 업데이트 해줍니다.

리엑트에서는 라우터라는 개념을 사용하여 해당 페이지에서 로딩된 자바스크립트와 현재 사용자 브라우저의 주소 상태에 따라 다양한 화면을 보여 줄 수 있습니다. 그리고 이것을 라우팅이라고 합니다.



## 프로젝트에 라우터 적용

```jsx
//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

이렇게 BrowserRouter로 감싸면 페이지를 새로고침하지 않고도 주소를 변경할 수 있습니다.

## 페이지 만들기

```jsx
import React from 'react';

const Home = ()=>{
    return(
        <div>
            <h1>홈</h1>
            <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
        </div>
    )
}

export default Home;
```

```jsx
import React from 'react'

const About = ()=>{
    return(
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리엑트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
        </div>
    )
}

export default About;
```

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import About from './About';
import Home from './Home'

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About}/>
    </div>
  );
}

export default App;

```



## Link 사용하기

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="./about">소개</Link>
        </li>
      </ul>
      <hr/>
      <Route path="/" component={Home}  exact={true}/>
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;

```

## Route 하나에 여러개의 path 설정하기

```jsx
<Route path={['/about', '/info']} component={About} />
```



## URL 파라미터

```jsx
// Profile.js
import React from 'react';

const data = {
    velopert:{
        name : '김민준',
        description : '리엑트를 좋아하는 개발자'
    },
    gildong :{
        name: '홍길동',
        description : '고전 소설 홍길동전의 주인공'
    }
}

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if(!profile){
        return<div>존재하지 않는 사용자입니다.</div>
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;
```

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="./about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li> 
      </ul>
      <hr/>
      <Route path="/" component={Home}  exact={true}/>
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile}/>
    </div>
  );
}

export default App;

```

match?
![1597729444585](C:\Users\user\AppData\Roaming\Typora\typora-user-images\1597729444585.png)

이렇게 match 객체 안에는 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보를 담고있습니다.

/profile/:username이라고 적어주면 math.params.username값을 통해 username을 조회할 수 있다.



## URL 쿼리

```jsx
//About.js
import React from 'react'
import qs from 'qs'

const About = ({location})=>{
    const query = qs.parse(location.search, {
        ignoreQueryPrefix:true
    })
    const showDetail = query.detail === 'true';
    return(
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리엑트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p> 
            {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
        </div>
    )
}

export default About;
```



## 서브라우터

```jsx
//profiles.js
import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = ()=>{
    return(
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert"> velopert </Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>
            <Route path="/profiles" exact render={()=><div>사용자를 선택해 주세요</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
        </div>
        
    )
}
export default Profiles
```

## history

match와 location과 함께 전달되는 props이다.

```jsx
import React, {Component} from 'react';

class HistorySample extends Component{
    handleGoBack = ()=>{
        this.props.history.goBack();
    }
    handleGoHome = () =>{
        this.props.history.push('/');
    }
    componentDidMount(){
        this.unblock = this.props.history.block('정말 떠나실 건가요?');
    }
    componentWillMount(){
        if(this.unblock){
            this.unblock();
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        )
    }
}

export default HistorySample;
```



## withRouter

라우트로 사용된 컴포넌트가 아니어도 math, location, history객체를 접근할 수 있게 해준다.

```react
import React from 'react';
import {withRouter} from 'react-router-dom';
const WithRouterSample = ({location, match, history}) =>{
    return(
        <div>
            <h4>location</h4>
            <textarea
            value={JSON.stringify(location, null,2)} rows={7} readOnly={true}></textarea> 
            {/* null과 2를 넣는다면 json에 들여쓰기가 적용된 상태로 출력 */}
            <h4>match</h4>
            <textarea   
            value={JSON.stringify(match, null,2)} rows={7} readOnly={true}></textarea>
            <button onClick={()=>history.push('/')}>홈으로</button>
        </div>
    )
}
export default withRouter(WithRouterSample)
```

```jsx
//profile.js
<WithRouterSample></WithRouterSample>
```



## Switch

여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만을 렌더링 시켜준다.

```jsx
//App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';
import history from "./HistorySample"
import HistorySample from './HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">Hitory예제</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/" component={Home}  exact={true}/>
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
        <Route render={({location})=>(<div>
          <h2>이 페이지는 존재하지 않습니다 :</h2>
          {console.log(location)}
          <p>{location.pathname}</p>
        </div>)}// render를 사용함으로써 불필요한 마운트가 일어나지 않는다.
        />
      </Switch>
    </div>
  );
}

export default App;

```



## NavLink

현재 경로와 LInk에서 사용하는 경로가 일치할 때 css를 적용

```react
import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Profile from './Profile';


const Profiles = ()=>{
    const activeStyle = {
        background : 'black',
        color : 'white'
    }
    return(
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/velopert"> velopert </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/gildong">gildong</NavLink>
                </li>
            </ul>
            <Route path="/profiles" exact render={()=><div>사용자를 선택해 주세요</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
        </div>
        
    )
}
export default Profiles
```



# 정리

우리가 웹 사이트를 제작할 때  SPA가 아니라면 새로운 화면을 보여줄 때마다 서버측에서 모든 뷰를 준비해야합니다.
따라서 사용자와의 인터렉션에 따라 필요한 부분만 업데이트를 하는 것이 효율적입니다. => 라우터 만들어짐

단 앱의 규모가 커진다면 js파일 또한 커지기에(페이지 로딩시 사용자가 방문하지 않을 수도 있는 페이지의 스크립트도 불러옴) 이를 나중에 배울 코드 스플리팅을 활용하여 해결할 수 있다.