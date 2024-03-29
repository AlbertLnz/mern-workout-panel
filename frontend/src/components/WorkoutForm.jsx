import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Toaster, toast } from "sonner"
import useAuthContext from "../hooks/useAuthContext"

const WorkoutForm = () => {
  
  const { dispatch } = useWorkoutsContext()

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user) {
      setError('You must logged in')
      return
    }

    const workout = { title, load, reps }

    const response = await fetch('http://localhost:3000/api/workouts', { 
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    
    const json = await response.json()
    
    if(!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
      // console.log(error)
    } else {
      setTitle('')
      setLoad('')
      setReps('')
      setError('')
      setEmptyFields([])
      dispatch({ type: 'CREATE_WORKOUT', payload: json.workoutCreated })
      toast.success(json.message)
      console.log('Workout added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>        
    
      <label>Exercise title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={emptyFields.includes('title') ? 'error' : '' } />
    
      <label>Exercise load:</label>
      <input type="number" min={0} value={load} onChange={(e) => setLoad(e.target.value)} className={emptyFields.includes('load') ? 'error' : '' } />
    
      <label>Exercise reps:</label>
      <input type="number" min={0} value={reps} onChange={(e) => setReps(e.target.value)} className={emptyFields.includes('reps') ? 'error' : '' } />

      <button type="submit">Add a new workout</button>

      {error &&
        <div className="error">
          { error }
        </div>
      }

      <Toaster richColors />
    </form>

  )
}

export default WorkoutForm
