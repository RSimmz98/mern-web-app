import { useRoutinesContext } from '../hooks/useRoutinesContext'

const RoutineDetails = ({ routine }) => {
  const { dispatch } =useRoutinesContext()

  const handleClick = async () => {
    const response = await fetch('/api/routines/' + routine._id,{
      method: 'DELETE'
    })
    const json = await response.json()

  if(response.ok) {
      dispatch({type: 'DELETE_ROUTINE', payload: json})
    }
  }

  return (
    <div className="routine-details">
      <h4>{routine.title}</h4>
      <p><strong>Load(days): </strong>{routine.load}</p>
      <p><strong>Reps: </strong>{routine.reps}</p>
      <p>{routine.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default RoutineDetails
