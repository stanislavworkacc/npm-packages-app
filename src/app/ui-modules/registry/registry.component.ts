import { Component } from '@angular/core'
import {Store} from "@ngrx/store";
import {changeRegistryFrom} from "@store/actions/registry.actionts";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent {

  constructor(
    private readonly store: Store
  ) {
  }

  isSearchEmpty: boolean = false;

  isEmptySearchHandler(value: boolean) {
    this.isSearchEmpty = value;
  }

  loadMore() {
    this.store.dispatch(changeRegistryFrom({}));
  }
}
