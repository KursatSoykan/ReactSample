
import React, { useState } from 'react'
import './State1.css'
import './State.css'




function StateIntro1() {

    const [divColor, setColor] = useState('red')
    const changeColor = () => {
        setColor("Black")
    }
    return (
        <div>
            <div className='state'>
                <button onClick={changeColor} >Change Color</button>
                <hr />
            </div>
            <div style={{ display: 'flex', justifyContent: 'column' }}>
                <div className='state1' style={{ backgroundColor: divColor }}>

                </div>
                <div className='state1' style={{ backgroundColor: divColor }}>

                </div>
            </div>
        </div >
    )
}

export default StateIntro1
