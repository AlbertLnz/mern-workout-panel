import { useWorkoutsContext } from '../hooks/useWorkoutsContext.js'

const WorkoutDetails = ({ workout }) => {
  
  const { dispatch } = useWorkoutsContext()

  const handleDelete = async () => {

    const response = await fetch('http://localhost:3000/api/workouts/'+workout._id, {
      method: 'DELETE'
    })

    const json = await response.json()

    if(response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json })
    }
  }
  
  return (
    <div className="workout-details">
      <h4>{ workout.title }</h4>
      <p><strong>Load (kg): </strong>{ workout.load }</p>
      <p><strong>Reps: </strong>{ workout.reps }</p>
      <p>{ workout.createdAt }</p>
      <span onClick={handleDelete}>Delete</span>
    </div>
  )
}

export default WorkoutDetails
