import React from 'react'

export default function WorkoutDisplay({workout}) {

    console.log(workout)
  return (
    <div>
        <p>{workout? workout.status : null}</p>
    </div>
  )
}
