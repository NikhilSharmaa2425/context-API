import React, { useContext } from 'react'
import Counter from "./Counter"
import { context } from "../App"

const ChangeValues = () => {
    const {count,setCount} = useContext(context)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <Counter />
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}


export default ChangeValues