import { useEffect, useState } from "react"

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {

    const fetchWorkoutData = async () => {

      const response = await fetch('http://localhost:3000/api/workouts')
      const json = await response.json()

      if(response.ok) {
        setWorkouts(json)
      }

    }
    fetchWorkoutData()

  }, [])
  

  return (
    <div className="home">

      <div className="workouts">

        {workouts.map((workout) => (

          <p key={workout._id}>{workout.title}</p>

        ))}

      </div>

    </div>
  )
}

export default App
