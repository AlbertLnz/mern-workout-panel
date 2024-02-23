import { useWorkoutsContext } from '../hooks/useWorkoutsContext.js'
import { format } from "@formkit/tempo"
import { Toaster, toast } from "sonner"

const WorkoutDetails = ({ workout }) => {
  
  const { dispatch } = useWorkoutsContext()

  const dateReadable = format(workout.createdAt, "full")

  const handleDelete = async () => {

    const response = await fetch('http://localhost:3000/api/workouts/'+workout._id, {
      method: 'DELETE'
    })

    const json = await response.json()

    if(response.ok) {
      toast.success(json.message, {
        style: { background: '#FF8080', color: 'black' }
      });

      dispatch({ type: 'DELETE_WORKOUT', payload: json.workout })
    }
  }
  
  return (
    <div className="workout-details">
      <h4>{ workout.title }</h4>
      <p><strong>Load (kg): </strong>{ workout.load }</p>
      <p><strong>Reps: </strong>{ workout.reps }</p>
      <p>{ dateReadable }</p>
      <span onClick={handleDelete} className='material-symbols-outlined'>Delete</span>
      
      <Toaster />
    </div>
  )
}

export default WorkoutDetails
