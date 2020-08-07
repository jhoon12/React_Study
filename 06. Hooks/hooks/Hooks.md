# Hooks

hooks는 함수형 컴포넌트에서도 클래스형 컴포넌트에서 사용하는 기능(state)와 같은 것들을 사용하게 제공해주는 기능이다.



## useState

```react
import React, {useState, useEffect} from 'react';

const Info = () =>{
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=>{})
    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickname = e =>{
        setNickname(e.target.value);
    }
    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name} 
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    );    
};

export default Info;
```



## useEffect

리엑트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 hooks이다.

componentDIdMount와 componentDidUpdate를 합친 형태로 보아도 무방하다.

```react
import React, {useState, useEffect} from 'react';

const Info = () =>{
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=>{
        console.log('렌더링이 완료되었습니다!');
        console.log({name,nickname});
    })
    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickname = e =>{
        setNickname(e.target.value);
    }
    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name} 
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    );    
};

export default Info;
```

### 마운트될 때만 실행하고 싶을 때

컴포넌트가 화면에 맨 처음 렌더링 할 때만 실행하고, 업데이트될 때는 실행하지 않으려면 두번째 파라미터로 비어있는배열을 넣어주면 된다.

```react
useEffect(()=>{
        console.log('렌더링이 완료되었습니다!');
        console.log({name,nickname});
    },[])
```

### 특정 값이 업데이트될 때만 실행하고 싶을 때

useEffect를 사용할 때, 특정 값이 변경될 때만 호출하고 싶을 경우에 class형이라면 어떻게 작성할까?

```react
componenetDidUpdate(prevProps, prevState){
	if(prevProps.value !== this.props.value){
		doSomething();
	}
}
```

value의 값이 바뀔 때만 doSomething함수를 수행한다.

useEffect를 통해 이 기능을 수행하려면의 두 번째 파라미터로 전달되는 배열안에 검사하고 싶은 값을 넣는다.

```react
 useEffect(()=>{
        console.log({name});
    },[name])
```

배열안에는 useState로 관리하고 있는 상태를 넣어주어도 되고, props로 전달받은 값을 넣어 주어도 된다.

### 뒷정리하기

컴포넌트가 언마운트(DOM에서 제거됨)되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리 함수를 반환해 주어야 한다.

```react
import React, {useState, useEffect} from 'react';

const Info = () =>{
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return()=>{
            console.log('cleanup');
            console.log(name);
        }   
    })
    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickname = e =>{
        setNickname(e.target.value);
    }
    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name} 
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    );    
};

export default Info;
```

```react
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Info from './info'
function App() {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <button
        onClick={()=>{setvisible(!visible)}}>
          {visible ? "숨기기" : "보이기"}
        </button>
        <hr/>
        {visible&&<Info/>}
    </div>
  );
}

export default App;

```

뒷정리 함수하 호출될 때는 업데이트가 되기 직전의 값을  보여준다. 특정 값이 언마운트 될 때만 뒷정리 함수를 호출하고 싶다면 useEffect함수의 두 번째 파라미터에 비어있는 배열을 넣으면 된다.

```react
 useEffect(()=>{
        console.log('effect');
        console.log(name);
        return (()=>{
            console.log('cleanup');
            console.log(name);
        });   
    }, [name])
```



# useMemo

```react
import React, { useState } from 'react';

const getAverage = numbers => {
    console.log('평균 값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum/ numbers.length;
};
const Average = ()=>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e =>{
        setNumber(e.target.value);
    };
    const onInsert = e =>{
        const nextList  = list.concat(parseInt(number));
        setList(nextList);
        setNumber("")
    };

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 </b>{getAverage(list)}
            </div>
        </div>
    )
};
export default Average;
```



이 코드에서 숫자를 등록할 떄뿐만 아니라 인풋 내용이 수정될 때도 우리가 만든 getAverage함수가 호출된다.

이 문제를 useMemo Hook을 사용하면 최적화 할 수 있다.

```react
import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
    console.log('평균 값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum/ numbers.length;
};
const Average = ()=>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e =>{;
        setNumber(e.target.value);
    };
    const onInsert = e =>{
        const nextList  = list.concat(parseInt(number));
        setList(nextList);
        setNumber("")
    };

    const avg = useMemo(()=>getAverage(list), [list])

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 </b>{avg}
            </div>
        </div>
    )
};
export default Average;
```

useMemo를 사용함으로써 list의 값이 변하였을 때만 getAverage함수를 실행한다. 

useEffect는 렌더링을 한 후 실행하지만
usememo는 렌더링 하는 과정에서 검사하여 실행할지 안할지를 결정한다.



## useCallback

useMemo와 굉장히 비슷한 함수이다. 주로 렌더링 성능을 최적화 하기 위하여 사용

방금 구현한 Average 컴포넌트의 onChange와 onInsert함수는 컴포넌트가 리렌더링될 때마다 새로 생성된다.

다음은 최적화한 코드이다.

```react
import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
    console.log('평균 값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum/ numbers.length;
};
const Average = ()=>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(e =>{;
        setNumber(e.target.value);
    },[]);//컴포넌트가 처음 렌더링될 때만
    const onInsert = useCallback(e =>{
        const nextList  = list.concat(parseInt(number));
        setList(nextList);
        setNumber("")
    },[number, list]);//number또는 list가 변하였을 때만 함수생성

    const avg = useMemo(()=>getAverage(list), [list])

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 </b>{avg}
            </div>
        </div>
    )
};
export default Average;
```



결국 useCallback은 결국 useMemo로 함수를 반환하는 상황에서 더 편하게 사용할 수 있는 Hooks이다.

숫자, 문자열, 객체처럼 일반 값을 재사용하려면 useMemo를 사용하고, - 계산된 값

함수를 재사용하려면 useCallback을 사용한다. - 콜백용으로 사용가능

아래 두 코드는 서로 같은 코드이다.

```react
useCallback(()=>{
	console.log('hello world!')
},[])
```

```react
useMemo(()=>{
	const fn = ()=>{
		console.log('hello world');
	}
	return fn;
}, [])
```



useRef

useRef, 함수형 컴포넌트에서 ref로 쉽게 사용할수 있도록 한다.

```react
import React, { useState, useMemo, useCallback , useRef} from 'react';

const getAverage = numbers => {
    console.log('평균 값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum/ numbers.length;
};
const Average = ()=>{
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputE1 = useRef(null);

    const onChange = useCallback(e =>{;
        setNumber(e.target.value);
    },[]);//컴포넌트가 처음 렌더링될 때만
    const onInsert = useCallback(e =>{
        const nextList  = list.concat(parseInt(number));
        setList(nextList);
        setNumber("")
    },[number, list]);//number또는 list가 변하였을 때만 함수생성

    const avg = useMemo(()=>getAverage(list), [list])

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert} ref={inputE1}>등록</button>
            <ul>
                {list.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 </b>{avg}
            </div>
        </div>
    )
};
export default Average;
```

