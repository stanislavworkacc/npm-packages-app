import { NgModule } from '@angular/core'
import { DialogComponent } from './components/dialog/dialog.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http'
import { ShortDescriptionPipe } from './pipes/short-description.pipe'

@NgModule({
  declarations: [DialogComponent, ShortDescriptionPipe],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    ShortDescriptionPipe,
    FormsModule
  ],
})
export class ShareableModule {}
