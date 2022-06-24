 import {useEffect, useState} from 'react'

//Components
 import RoutineDetails from '../components/RoutineDetails'

  const Home = () => {
    const[routines, setRoutines] = useState(null)

    useEffect(() => {
      const fetchRoutines = async () => {
      const response = await fetch('/api/routines')
      const json = await response.json()

       if(response.ok){
         setRoutines(json)
       }
     }

     fetchRoutines()
   }, [])

    return(
      <div className='pages'>
        <div className="routines">
          {routines && routines.map((routine) => (
           <RoutineDetails key={routine._id} routine={routine} />
         ))}
       </div>
      </div>
    )
  }

  export default Home
