

//   //state is required to be little complex
//   //operation perform on State is also going to be complex or not limited to one
//   //state is availbale in reducer function
//   //{count: 0} - state in object

import  { useReducer } from 'react'
import { myReducer } from './myReducer'

export default function HookReducer() {

    // state is available in reducer function
    //  { count: 0 } - state in object format
    const [Counter, dispatch] = useReducer(myReducer, { count: 0 })
    return (
        <div>
            <h2 className='text-center'>Understanding ReducerHook concepts</h2>
            <h3 className=''>Counter is: {Counter.count}</h3>
            <button className="btn btn-primary mx-2" onClick={() => dispatch({ type: "increseByOne" })}>IncreaseByOne</button>
            <button className="btn btn-secondary mx-2" onClick={() => dispatch({ type: "decreseByOne" })}>DecreaseByOne</button>
            <button className="btn btn-warning mx-2" onClick={() => dispatch({ type: "increseByFive" })}>IncreaseByFive</button>
            <button className="btn btn-info mx-2" onClick={() => dispatch({ type: "decreseByFive" })}>DecreaseByFive</button>
        </div >
    )
}

