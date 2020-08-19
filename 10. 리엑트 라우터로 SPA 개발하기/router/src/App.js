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
        </div>)}
        />
      </Switch>
    </div>
  );
}

export default App;
