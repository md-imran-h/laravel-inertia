import React, { useState } from 'react';
import MyElement from "./MyElement.jsx";

const App = () => {
    return (
        <>
        <div>
            <h1>Counter 1</h1>
            <MyElement />
        </div>
        <div>
            <h1>Counter 2</h1>
            <MyElement />
        </div>
        </>
    )
}

export default App
