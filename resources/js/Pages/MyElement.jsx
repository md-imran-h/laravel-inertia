import React, { useState } from 'react';

const comment = {
    date: new Date(),
    text: 'I am learning react',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }

}
const myElement = () => {
    const [counter, setCounter] = React.useState(0);


    return (
        <div>
            <h1>{new Date().toLocaleTimeString()}</h1>
            <h1 id='display'>{ counter } </h1>
            <div>
                <button id="button" onClick={ () => setCounter(counter + 1) }>Increment +</button>
            </div>
        </div>
    )
}

export default myElement
