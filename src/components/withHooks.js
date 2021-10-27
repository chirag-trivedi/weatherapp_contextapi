import React, {useState} from 'react';

function HooksComp() {
    const [title] = useState('Hooks Component from state')
    const [subject] = useState('React')
    const [count, setCount] = useState(0)

    return(
        <div>
            <div className="jumbotron">
                <h1>{title}</h1>
                <p>
                    A jumbotron
                </p>
            </div>
            <div onClick={() => {setCount(count+1)}}>Click</div>
            <h2>{count}</h2>
            <h2>{subject}</h2>
        </div>
    )
}

export default HooksComp;