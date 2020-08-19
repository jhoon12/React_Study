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