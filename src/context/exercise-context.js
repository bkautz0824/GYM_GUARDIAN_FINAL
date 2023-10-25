"use client"
import { createContext, useState, useContext, useMemo } from "react";

export const StateContext = createContext(null)

const initialState = {
    exercises: [],
    bodyPart: null
}

export default function StateContextProvider({
    children
}) {

    const [state, setState] = useState(initialState)

    console.log(state)


    return(
        <StateContext.Provider value={{state, setState}}>
            {children}
        </StateContext.Provider>
    )
}

export const useBuilderContext = () => {
    return useContext(StateContext);
  };