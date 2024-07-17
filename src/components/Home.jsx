import { useContext } from 'react'
import myContext from '../../Context/myContext';

export default function Home() {
    //declaring contextHook
    const { theme, updateTheme } = useContext(myContext);

    const handleClick = () => {
        updateTheme(theme == "light" ? "dark" : "light")
    }
    return (
        <div className="container homeCont p-2 text-white rounded-2" style={{ backgroundColor: theme == "light" ? "skyblue" : "black" }}>
            <h2>Current Theme is: {theme}</h2>
            <button className="btn btn-warning text-primary"

                onClick={handleClick}>Change Theme</button>
        </div>
    )
}
