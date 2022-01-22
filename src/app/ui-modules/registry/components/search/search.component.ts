import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core'
import { loadRegistryData } from '@store/actions/registry.actionts'
import { Store } from '@ngrx/store'
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, takeUntil} from "rxjs/operators";
import {getSearchApiFromConstant} from "@core/dto/common-constants";


@Component({
  selector: 'registry-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchNpmValue: string = '';
  userQuestionUpdate: Subject<string> = new Subject<string>();
  destroy$: Subject<boolean> = new Subject<boolean>();
  from: number = getSearchApiFromConstant;

  @Output('isEmptySearch') isEmptySearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.userQuestionUpdate.pipe(
      debounceTime(400),
      takeUntil(this.destroy$),
      distinctUntilChanged())
      .subscribe((searchValue: string) => {
        this.isEmptySearch.emit(!!searchValue.length);
        this.store.dispatch(loadRegistryData({ search: searchValue, from: this.from }))
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete()
  }

  loadMore() {

  }
}
