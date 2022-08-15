import { useAuthContext } from './useAuthContext'
import { useRoutinesContext } from './useRoutinesContext' 
export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: routinesDispatch } = useRoutinesContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatch({ type: 'SET_ROUTINES', payload: null})
  }

  return { logout }
}
