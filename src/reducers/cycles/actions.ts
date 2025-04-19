import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPTED_CYCLE = 'INTERRUPTED_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINESHED = 'MARK_CURRENT_CYCLE_AS_FINESHED',
}

export function createNewCicleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINESHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPTED_CYCLE,
  }
}
