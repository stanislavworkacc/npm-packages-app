import { FeaturesNames } from './features.names'
import * as registryReducer from './reducers/registry.reducers'

export const reducers = {
  [FeaturesNames.Registry]: registryReducer.reducer,
}
