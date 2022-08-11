import {useState} from 'react'
import {useRoutinesContext} from '../hooks/useRoutinesContext'
import  { useAuthContext } from '../hooks/useAuthContext'
  const RoutineForm = () => {
   const { dispatch } =useRoutinesContext()
  const { user } = useAuthContext()
   const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
     const [reps, setReps] = useState('');
      const [error, setError] = useState(null)
       const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
      e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }
  

  const routine = {title, load, reps}

  const response = await fetch('/api/routines', {
    method: 'POST',
    body: JSON.stringify(routine),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  })
  
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      setEmptyFields(json.emptyFields)
  }
    if(response.ok){
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([])
      console.log('new rourine has been created', json)
        dispatch({type: 'CREATE_ROUTINE', payload: json})
    
    }
   }
  return ( 
     
    <form className='create' onSubmit={handleSubmit}>
      <label>Routine Title:</label>
      <input 
        type="text" 
        onChange = {(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
        />
         <label>Load (in days):</label>
      <input 
        type="number" 
        onChange = {(e) => setLoad(e.target.value)}
        value={load}
         className={emptyFields.includes('load') ? 'error' : ''}
        />
         <label>Reps:</label>
      <input 
        type="number" 
        onChange = {(e) => setReps(e.target.value)}
        value={reps}
         className={emptyFields.includes('reps') ? 'error' : ''}
        />

        <button>Add Routine</button>
          {error && <div className="error">{error}</div>}
    </form>
  )

}

export default RoutineForm
