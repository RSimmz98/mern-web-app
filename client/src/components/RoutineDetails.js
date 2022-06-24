const RoutineDetails = ({ routine }) => {
  return (
    <div className="routine-details">
      <h4>{routine.title}</h4>
      <p><strong>Load(days): </strong>{routine.load}</p>
      <p><strong>Reps: </strong>{routine.reps}</p>
      <p>{routine.createdAt}</p>
    </div>
  )
}

export default RoutineDetails
