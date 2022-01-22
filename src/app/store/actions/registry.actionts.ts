import { createAction, props } from '@ngrx/store'

export const LOAD_REGISTRY_DATA = '[LOAD_REGISTRY_DATA] Load registry data'
export const LOAD_REGISTRY_DATA_SUCCESS =
  '[LOAD_REGISTRY_DATA_SUCCESS] Load registry data success'
export const LOAD_REGISTRY_DATA_FAILURE =
  '[LOAD_REGISTRY_DATA_FAILURE] Load registry data failure'

export const CHANGE_REGISTRY_FROM = '[CHANGE_REGISTRY_FROM] Change from';
export const ADD_REGISTRY_ITEMS = '[ADD_REGISTRY_ITEMS] Add registry items';

export const loadRegistryData = createAction(LOAD_REGISTRY_DATA, props<any>())

export const loadRegistrySuccess = createAction(
  LOAD_REGISTRY_DATA_SUCCESS,
  props<any>()
);

export const addRegistryItems = createAction(
  ADD_REGISTRY_ITEMS,
  props<any>()
)

export const loadRegistryFailure = createAction(LOAD_REGISTRY_DATA_FAILURE);

export const changeRegistryFrom = createAction(
  CHANGE_REGISTRY_FROM,
  props<any>()
);
