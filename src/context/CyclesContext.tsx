import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { Cycle, cyclesReducers } from '../reducers/cycles/reducer'
import { createNewCicleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  setAmountSecondsPassed: React.Dispatch<React.SetStateAction<number>>
  amountSecondsPassed: number,
  markCurrentCycleAsFinished: () => void
  InterruptCurrentCycle: () => void
  CreateNewCicle: (data: CreateCycleData) => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducers,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedSateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedSateAsJSON) {
        return JSON.parse(storedSateAsJSON)
      }

      return initialState
    },
  )

  const { activeCycleId, cycles } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function CreateNewCicle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(createNewCicleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function InterruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }
  localStorage.clear()
  return (
    <CyclesContext.Provider value={{
      cycles,
      activeCycle,
      activeCycleId,
      markCurrentCycleAsFinished,
      amountSecondsPassed,
      setAmountSecondsPassed,
      InterruptCurrentCycle,
      CreateNewCicle,
    }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
