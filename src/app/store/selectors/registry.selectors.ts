import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'
import { FeaturesNames } from '../features.names'
import * as reducer from '../reducers/registry.reducers'

export const getRegistryStateFeatureSelector = createFeatureSelector(
  FeaturesNames.Registry
)

export const getRegistryData = createSelector(
  getRegistryStateFeatureSelector,
  reducer.getRegistryState
)
