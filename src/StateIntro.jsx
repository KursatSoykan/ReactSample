import React, { useState } from 'react'
import './State.css'

function StateIntro() {

    const [randomNumber1, setrandomNumber1] = useState(100)
    const [randomNumber2, setrandomNumber2] = useState(100)

    const go = () => {
        var randomNumber = Math.floor(Math.random() * 1000)
        setrandomNumber1(randomNumber)
        setrandomNumber2(randomNumber)
    }


    return (
        <div>
            <div className='state' >
                <button onClick={go}>Random</button>
                <hr />
            </div>
            <div style={{ width: randomNumber1, height: randomNumber2, backgroundColor: "aqua" }}>
            </div>
        </div>
    )
}

export default StateIntro
