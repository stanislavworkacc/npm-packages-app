import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import { loadRegistryData } from '@store/actions/registry.actionts'
import { Store } from '@ngrx/store'
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'registry-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchNpmValue: string = '';
  userQuestionUpdate: Subject<string> = new Subject<string>();

  @Output('isEmptySearch') isEmptySearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.userQuestionUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe((searchValue: string) => {
        this.isEmptySearch.emit(!!searchValue.length);
        this.store.dispatch(loadRegistryData({ search: searchValue }))
    })
  }
}
