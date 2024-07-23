//   //this state is used for basic datatypes 
//   // const [count, setCount] = useState();
//   //when we need complex state(object,array)
//   //we use reducerHook


import './App.css'
import Hero from './components/hero/Hero'
// import Home from './components/home/Home'
// import HookReducer from './reducerHook/HookReducer';

function App() {

  // this state is used for basic datatpes
  // const [ count,setCount] = useState(0);

  return (
    <>
      {/* <Home/> */}
      <Hero/>
      {/* <HookReducer /> */}

    </>
  )
}

export default App

