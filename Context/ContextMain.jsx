import  { useState } from 'react'
import myContext from './myContext';
import propTypes from "prop-types"


export default function ContextMain({ children }) {
    // declaring state 
    const [theme, updateTheme] = useState("light");
    const defaultTheme = { theme, updateTheme }

    return (
        <myContext.Provider value={defaultTheme}>{children}</myContext.Provider>
    )
}

ContextMain.propTypes = {
    children: propTypes.any,
}
