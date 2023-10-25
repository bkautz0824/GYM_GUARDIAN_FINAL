import {create} from 'zustand';


const useStore = create((set) => ({
  state: {
    exercises: [],
    bodyPart: null,
  },
  setState: (newState) => set((state) => ({ state: { ...state.state, ...newState } })),
}));

export default useStore;