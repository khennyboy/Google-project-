import React, {useState} from 'react'
import { Routes } from '../components/Routes'

let globalContext = React.createContext()

export {globalContext}

export default function ContextProvider() {
    const [values, setValues] = useState({
        data:[],
        loading: false,
        error:'',
        serachInput:'',
        showLink : false
    })

  return (
    <globalContext.Provider value={{values, setValues}}>
        <Routes/>
    </globalContext.Provider>
  )
}
