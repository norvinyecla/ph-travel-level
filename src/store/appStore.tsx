import { create } from 'zustand'

interface ShapeState {
    shapes: {
        [key: string]: number | string
    },
    removeAllScores: () => void,
    updateShapes: (name: string, newValue: number) => void,
    setCurrentlySelected: (name: string) => void,
    clearCurrentlySelected: () => void
}


const useAppStore = create<ShapeState>()((set) => ({
  shapes: {
    apple: 0,
    banana: 0,
    cherry: 0,
    currentlySelected: '',
  },
  removeAllScores: () => set(
    { 
        shapes: {
            apple: 0,
            banana: 0,
            cherry: 0
        } 
    }
  ),
  updateShapes: (name: string, newValue: number) => set({ shapes: { [name]: newValue } }),
  setCurrentlySelected: (name: string) => set({shapes: { currentlySelected: name}}),
  clearCurrentlySelected: () => set({shapes: { currentlySelected: ''}}),
}))

export default useAppStore;