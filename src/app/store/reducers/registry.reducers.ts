import { createReducer, on } from '@ngrx/store'
import * as registryActions from '../actions/registry.actionts'
import {getSearchApiFromConstant} from "@core/dto/common-constants";

interface RegistryState {
  search: string,
  registryData: any,
  isLoading: boolean,
  hasLoaded: boolean,
  isFailure: boolean,
  from: number,
}

export const initialState: RegistryState = {
  search: '',
  registryData: [],
  isLoading: false,
  isFailure: false,
  hasLoaded: false,
  from: getSearchApiFromConstant,
}

const registryReducer = createReducer(
  initialState,
  on(registryActions.loadRegistryData, (state: RegistryState, result): any => {
    return {
      ...state,
      isLoading: true,
      search: result.search,
    }
  }),
  on(
    registryActions.loadRegistrySuccess,
    (state: RegistryState, payload: any) => {
      return {
        ...state,
        registryData: payload.objects,
        hasLoaded: true,
        from: 0
      }
    }
  ),
  on(registryActions.addRegistryItems, (state, payload) => {
    return {
      ...state,
      registryData: [
        ...state.registryData,
        ...payload.objects,
      ],
    }
  }),
  on(registryActions.loadRegistryFailure, (state: RegistryState) => {
    return {
      ...state,
      isFailure: true,
    }
  }),
  on(registryActions.changeRegistryFrom, (state: RegistryState, result: any) => {
    return {
      ...state,
      from: state.from + 10
    }
  })
)

export const getRegistryState = (state: any) => {
  return state
}

export const getRegistryFromData = (state: any) => {
  return {
    search: state.search,
    from: state.from
  }
}

export function reducer(state: any, action: any): any {
  return registryReducer(state, action)
}
