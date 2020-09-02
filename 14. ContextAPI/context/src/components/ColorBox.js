import React from 'react';
import ColorContext from '../Context/color';

const ColorBox = ()=>{
    return(
        <ColorContext.Consumer>
            {value=>(
                <div
                    style={{
                        width:'64px',
                        height:'64px',
                        background: value.color
                    }}></div>
            )}
        </ColorContext.Consumer>
    )
}

export default ColorBox;