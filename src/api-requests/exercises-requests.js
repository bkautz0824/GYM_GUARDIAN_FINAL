import { prodUrl } from "./api";

export const getExercises = async () => {
    try {
      const response = await fetch(`${prodUrl}/api/exercises`, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const res = await response.json();
      
      return res.data; // You should return the data you fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., display an error message to the user
      throw error; // Rethrow the error to propagate it to the caller
    }
  };

          // const createNewWorkout = async () => {
      
        //     try {
        //       const response = await fetch('http://localhost:3000/api/workout', {
        //         method: 'POST',
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //           name: name,
        //         }),
        //       });
      
        //       if (!response.ok) {
        //         // Handle non-OK responses
        //         console.error('Failed to fetch data:', response.statusText);
        //         return;
        //       }
      
        //       // Process the response data if needed
        //       const data = await response.json();
        //       const workoutId = data.data._id
        //       setWorkoutId(workoutId)
        //       console.log('Data received:', data);
        //     } catch (error) {
        //       // Handle errors during the fetch
        //       console.error('Error fetching data:', error);
        //     }
        //   };
      
        //   // createNewWorkout();
        // }