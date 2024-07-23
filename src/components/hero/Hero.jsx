import { useContext } from 'react'
import myContext from '../../../Context/myContext'

export default function Hero() {
  const{count, setCount} = useContext(myContext)
   const handleClick = () =>{
    setCount(count + 1)
   }
  return (
    <div className='container heroCont p-2 rounded-'>
      <h1 className='text-center'>Count: {count}</h1>
      <button className="btn btn-primary text-primary text-black"
     onClick={handleClick}>Count</button>
     
    </div>
  )
}

