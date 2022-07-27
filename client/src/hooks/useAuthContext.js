
 import {AuthContext} from '../context/AuthContext'
 import { useContext } from 'react'

  export const useRoutinesContext = () => {
    const context = useContext(AuthContext)
    
    if(!context) {
     throw Error('useRoutinesContext must be used inside an AuthContextProvider')
     
   }
   return context
 }
