import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { getRegistryData } from '@store/selectors/registry.selectors'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Component({
  selector: 'registry-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  tableData$: Observable<any> = this.store.select(getRegistryData).pipe(
    map((data: any) => {
      return this.modifyData(data.registryData)
    })
  )

  displayedColumns: string[] = ['author', 'name', 'version', 'description']

  constructor(private readonly store: Store) {}

  handleClick(row: any) {
    // console.log('row', row)
  }

  modifyData(data: any): any {
    return data.reduce((accum: any, el: any) => {
      accum = [
        ...accum,
        {
          author: el.package?.author?.name || '',
          description: el.package?.description || '',
          version: el.package?.version || '',
          name: el.package?.name || '',
        },
      ]

      return accum
    }, [])
  }
}
