import React, {useState} from 'react';


function listBody({list}){
  console.log(list)
    return(
      <div>
        {list.map(()=>{
          return(
            <div>{list.content}</div>
          )
        })}
      </div>
    )
  }

export default listBody