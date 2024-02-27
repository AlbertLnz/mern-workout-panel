import { useEffect } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import useAuthContext from "../hooks/useAuthContext"

const App = () => {
  // const [workouts, setWorkouts] = useState([]);
  const { workouts, dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  useEffect(() => {

    const fetchWorkoutData = async () => {

      const response = await fetch('http://localhost:3000/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if(response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }

    }

    if (user) {
      fetchWorkoutData()
    }

  }, [dispatch, user])
  

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
