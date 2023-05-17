import { useState } from "react"

const App = () =>{
    const [count, setCount] = useState(0)

    const incrementCount = () =>{
        setCount(count++)
    }

    const decrementCount = () =>{
        setCount(count--)
    }

    return (
        <div>
            <button onClick={incrementCount}>+</button>
            {count}
            <button onClick={decrementCount}>-</button>
        </div>
    )
}