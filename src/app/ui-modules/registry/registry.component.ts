import { Component } from '@angular/core'

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent {
  isSearchEmpty: boolean = false;

  isEmptySearchHandler(value: boolean) {
    this.isSearchEmpty = value;
  }
}
