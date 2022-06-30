 import {RoutinesContext} from '../context/RoutineContext'
 import { useContext } from 'react'

  export const useRoutinesContext = () => {
    const context = useContext(RoutinesContext)
    
    if(!context) {
     throw Error('useRoutinesContext must be used inside an RoutinesContextProvider')
     
   }
   return context
 }
