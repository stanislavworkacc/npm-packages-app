import { createReducer, on } from '@ngrx/store'
import * as registryActions from '../actions/registry.actionts'

interface RegistryState {
  registryData: any
  isLoading: boolean
  hasLoaded: boolean
  isFailure: boolean
}

export const initialState: RegistryState = {
  registryData: [],
  isLoading: false,
  isFailure: false,
  hasLoaded: false,
}

const registryReducer = createReducer(
  initialState,
  on(registryActions.loadRegistryData, (state: RegistryState): any => {
    return {
      ...state,
      isLoading: true,
    }
  }),
  on(
    registryActions.loadRegistrySuccess,
    (state: RegistryState, payload: any) => {
      return {
        ...state,
        registryData: payload.objects,
        hasLoaded: true,
      }
    }
  ),
  on(registryActions.loadRegistryFailure, (state: RegistryState) => {
    return {
      ...state,
      isFailure: true,
    }
  })
)

export const getRegistryState = (state: any) => {
  return state
}

export function reducer(state: any, action: any): any {
  return registryReducer(state, action)
}
