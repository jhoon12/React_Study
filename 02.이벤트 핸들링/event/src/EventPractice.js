import React, { useState } from "react";

const EventPractice = () => {
  // const [form, setForm] = useState({username:'', message:''});
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.vlaue);
  const onChangeMessage = (e) =>
    setMessage({ [e.target.name]: e.target.value });

  const onChange = (e) => {
    eval(`set${e.target.name}`)(e.target.value);
  };

  const onClick = () => {
    alert(message + ":" + username);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="Message"
        placeholder="아무거나입력해요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      ></input>
      <button onClick={onClick}>정답</button>
    </div>
  );
};

// class EventPractice extends Component{
//     state = {
//         message:'',
//         username:''
//     }
//     handleChange = (e)=>{
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }
//     handleClick = (e)=>{
//         alert(this.state.message+ ':' +this.state.username);
//         this.setState({
//             message:'',
//             username:''
//         })
//     }
//     handleKeyPress = (e) =>{
//         if(e.key === 'Enter'){
//             this.handleClick();
//         }
//     }
//         render(){
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나입력해요"
//                 value={this.state.message}
//                 onChange={this.handleChange}
//                 onKeyPress={this.handleKeyPress}
//                 />
//                 <input
//                 type="text"
//                 name="username"
//                 placeholder="사용자명"
//                 value={this.state.username}
//                 onChange={this.handleChange}>
//                 </input>
//                 <button onClick={this.handleClick}>
//                     정답
//                 </button>
//             </div>
//         );
//     }
// }

export default EventPractice;
