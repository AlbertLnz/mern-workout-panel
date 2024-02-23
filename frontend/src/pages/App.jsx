import { useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const App = () => {
  // const [workouts, setWorkouts] = useState([]);
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {

    const fetchWorkoutData = async () => {

      const response = await fetch('http://localhost:3000/api/workouts')
      const json = await response.json()

      if(response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }

    }
    fetchWorkoutData()

  }, [])
  

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />          
    </div>
  )
}

export default App
