import { NgModule } from '@angular/core'
import { RegistryComponent } from './registry.component'
import { TableComponent } from './components/table/table.component'
import { SearchComponent } from './components/search/search.component'
import { RouterModule, Routes } from '@angular/router'
import { ShareableModule } from '../../core/shareable.module'
import { CommonModule } from '@angular/common'
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: RegistryComponent,
  },
]

@NgModule({
  declarations: [RegistryComponent, TableComponent, SearchComponent],
  imports: [ShareableModule, RouterModule.forChild(routes), CommonModule],
})
export class RegistryModule {}
