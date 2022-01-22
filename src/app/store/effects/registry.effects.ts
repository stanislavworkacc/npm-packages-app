import { Injectable } from '@angular/core'
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import * as registryActions from '../actions/registry.actionts'
import {catchError, mergeMap, withLatestFrom} from 'rxjs/operators'
import { RegistryService } from '@ui-modules/registry/services/registry.service'
import {
  addRegistryItems,
  changeRegistryFrom,
  loadRegistryFailure,
  loadRegistrySuccess,
} from '../actions/registry.actionts'
import { of } from 'rxjs'
import {getSearchApiSizeConstant} from "@core/dto/common-constants";
import {getRegistryFromCount} from "@store/selectors/registry.selectors";

@Injectable()
export class RegistryEffects {
  constructor(
    private actions$: Actions,
    private route: Router,
    private readonly store: Store,
    private registryService: RegistryService,

  ) {}

  getSteps$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(registryActions.loadRegistryData),
      withLatestFrom(this.store.select(getRegistryFromCount)),
      mergeMap(([data, from]: any) => {
        return this.registryService
          .getRegistryData({ text: data.search, size: getSearchApiSizeConstant, from: data.from })
          .pipe(
            mergeMap((result) => {
              return of(loadRegistrySuccess(result))
            }),
            catchError((error: any) => {
              return of(loadRegistryFailure())
            })
          )
      })
    )
  })

  changeFrom$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(registryActions.changeRegistryFrom),
      withLatestFrom(this.store.select(getRegistryFromCount)),
      mergeMap(([action, data]) => {
        return this.registryService
          .getRegistryData({ text: data.search, size: getSearchApiSizeConstant, from: data.from })
          .pipe(
            mergeMap((result) => {
              return of(addRegistryItems(result))
            }),
            catchError((error: any) => {
              return of(loadRegistryFailure())
            })
          )
      })
    )
  })

  //  dispatch: false => data will not save into the reducer
}
