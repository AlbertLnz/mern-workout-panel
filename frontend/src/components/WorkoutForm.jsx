import { useState } from "react";

const WorkoutForm = () => {
  
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps }

    const response = await fetch('http://localhost:3000/api/workouts', { 
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const json = await response.json()
    
    if(!response.ok) {
      setError(json.error)
      console.log(error)
    } else {
      setTitle('')
      setLoad('')
      setReps('')
      setError('')
      console.log('Workout added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>        
    
      <label>Exercise title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    
      <label>Exercise load:</label>
      <input type="number" min={0} value={load} onChange={(e) => setLoad(e.target.value)} />
    
      <label>Exercise reps:</label>
      <input type="number" min={0} value={reps} onChange={(e) => setReps(e.target.value)} />

      <button type="submit">Add a new workout</button>

      {error &&
        <div className="error">
          { error }
        </div>
      }
    </form>

  )
}

export default WorkoutForm
