	# immer 사용법

불변성을 지키지 않으면 객체 내부의 값이 새로워져도 바뀐 것을 감지하지 못한다.
따라서 우리는 전개연산자(...) 통해 불변성을 지켜줬는데 만약 이것이 객체 구조가 엄청나게 깊어진다면 불변성을 유지하며 업데이트 하는 것이 매우 어렵다.

## 1. immer를 사용하지 않았을 때

```jsx
import React, {useRef, useCallback, useState} from 'react'

const App = ()=>{
  const nextId = useRef(1);
  const [form, setForm] = useState({name: ' ', username:''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  })

const onChange = useCallback(
  e =>{
    const { name, value} = e.target;
    setForm({
      ...form,
      [name] : [value]
    });
  },
  [form]
);

const onSubmit = useCallback(
  e => {
    e.preventDefault();
    const info ={
      id: nextId.current,
      name: form.name,
      username: form.username
    };
    setData({
      ...data,
      array: data.array.concat(info)
    })

    setForm({
      name: '',
      username: '',
    });
    nextId.current += 1;
  },
  [data, form.name, form.username]
);

const onRemove = useCallback(
  id=>{
    setData({
      ...data,
      array: data.array.filter(info => info.id !== id)
    });
  },
  [data]
)

return(
  <div>
    <form onSubmit={onSubmit}>
      <input
        name="username"
        placeholder="아이디"
        value={form.username}
        onChange={onChange}
      ></input>
      <input 
        name="name"
        placeholder="이름"
        value={form.name}
        onChange={onChange}
      ></input>
      <button type="submit">등록</button>
    </form>
    <div>
      <ul>
        {data.array.map(info => (
          <li key={info.id} onClick={()=>onRemove(info.id)}>
            {info.username} ({info.name})
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

export default App
```

전개연산자를 사용하면 상태가 복잡해짐



## immer 적용하기

```jsx
import React, {useRef, useCallback, useState} from 'react'
import produce from 'immer'

const App = ()=>{
  const nextId = useRef(1);
  const [form, setForm] = useState({name: ' ', username:''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  })

const onChange = useCallback(
  e =>{
    const { name, value} = e.target;
    setForm(
      produce(form, draft =>{
        draft[name] = value;
      })
    );
  },
  [form]
);

const onSubmit = useCallback(
  e => {
    e.preventDefault();
    const info ={
      id: nextId.current,
      name: form.name,
      username: form.username
    };
    setData(
      
      produce(data, draft=>{
        draft.array.push(info);
      })
    )

    setForm({
      name: '',
      username: '',
    });
    nextId.current += 1;
  },
  [data, form.name, form.username]
);

const onRemove = useCallback(
  id=>{
    setData(
      produce(data, draft=>{
        draft.array.splice(draft.array.findIndex(info => info.id === id), 1)
      })
    );
  },
  [data]
)

return(
  <div>
    <form onSubmit={onSubmit}>
      <input
        name="username"
        placeholder="아이디"
        value={form.username}
        onChange={onChange}
      ></input>
      <input 
        name="name"
        placeholder="이름"
        value={form.name}
        onChange={onChange}
      ></input>
      <button type="submit">등록</button>
    </form>
    <div>
      <ul>
        {data.array.map(info => (
          <li key={info.id} onClick={()=>onRemove(info.id)}>
            {info.username} ({info.name})
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

export default App
```



immer에서 자동적으로 불변성을 유지시켜줌으로 push나 splice등의 함수를 사용하도 무방하다.