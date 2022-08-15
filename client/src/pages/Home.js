 import {useEffect} from 'react'
 import {useRoutinesContext} from '../hooks/useRoutinesContext'
 import { useAuthContext } from '../hooks/useAuthContext'

//Components
 import RoutineDetails from '../components/RoutineDetails'
 import RoutineForm from '../components/RoutineForm'

  const Home = () => {
    //const[routines, setRoutines] = useState(null)
   //instead of using local state we using the global context
    const {routines, dispatch} = useRoutinesContext()
    const {user} = useAuthContext()
// Bearer is the name of the token
    useEffect(() => {
      const fetchRoutines = async () => {
      const response = await fetch('/api/routines', {
         headers: {'Authorization': `Bearer ${user.token}`},
       })
      const json = await response.json()

       if(response.ok){
         dispatch({type: 'SET_ROUTINES', payload: json})
         //  setRoutines(json)
       }
     }
     
     if (user) {
       fetchRoutines()
     }

  
   }, [dispatch, user])

    return(
      <div className='home'>
        <div className="routines">
          {routines && routines.map((routine) => (
           <RoutineDetails key={routine._id} routine={routine} />
         ))}
       </div>
         <RoutineForm />
      </div>
    )
  }

  export default Home
