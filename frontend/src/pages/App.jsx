import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

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

          <p key={workout._id}><WorkoutDetails workout={workout}/></p>

        ))}

      </div>

      <WorkoutForm />          
          
    </div>
  )
}

export default App
