import { Injectable } from '@angular/core'
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import * as registryActions from '../actions/registry.actionts'
import { catchError, mergeMap } from 'rxjs/operators'
import { RegistryService } from '@ui-modules/registry/services/registry.service'
import {
  loadRegistryFailure,
  loadRegistrySuccess,
} from '../actions/registry.actionts'
import { of } from 'rxjs'

@Injectable()
export class RegistryEffects {
  constructor(
    private actions$: Actions,
    private route: Router,
    private readonly store: Store,
    private registryService: RegistryService
  ) {}

  getSteps$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(registryActions.loadRegistryData),
      mergeMap((data: any) => {
        return this.registryService
          .getRegistryData({ text: data.search, size: 10 })
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

  //  dispatch: false => data will not save into the reducer
}
