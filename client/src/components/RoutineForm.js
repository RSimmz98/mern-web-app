import {useState} from 'react'
import {useRoutinesContext} from '../hooks/useRoutinesContext'
  
  const RoutineForm = () => {
   const { dispatch } =useRoutinesContext()
   const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
     const [reps, setReps] = useState('');
      const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
      e.preventDefault()
  

  const routine = {title, load, reps}

  const response = await fetch('/api/routines', {
    method: 'POST',
    body: JSON.stringify(routine),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
  }
    if(response.ok){
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
    
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
        />
         <label>Load (in days):</label>
      <input 
        type="number" 
        onChange = {(e) => setLoad(e.target.value)}
        value={load}
        />
         <label>Reps:</label>
      <input 
        type="number" 
        onChange = {(e) => setReps(e.target.value)}
        value={reps}
        />

        <button>Add Routine</button>
          {error && <div className="error">{error}</div>}
    </form>
  )

}

export default RoutineForm
