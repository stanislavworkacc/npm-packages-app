import { Injectable } from '@angular/core'
import { ApiService } from '@core/services/api.services'
import { debounceTime } from 'rxjs/operators'

@Injectable()
export class RegistryService {
  constructor(private apiService: ApiService) {}

  getRegistryData(searchValue: any): any {
    return this.apiService.get(searchValue).pipe(debounceTime(100))
  }
}
