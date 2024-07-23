import  { useState } from 'react'
import myContext from './myContext';
import propTypes from "prop-types"


export default function ContextMain({ children }) {
    // declaring state 
    // const [theme, updateTheme] = useState("light");
    const [count,setCount] = useState(0);
    //pass this state to Hero Component
    // const defaultTheme = { theme, updateTheme }
    const defaultCount = { count, setCount }

    return (
       <>
       {/* <myContext.Provider value={defaultTheme}>{children}</myContext.Provider> */}
        <myContext.Provider value={defaultCount}>{children}</myContext.Provider>
       </> 
    )
}

ContextMain.propTypes = {
    children: propTypes.any,
}
