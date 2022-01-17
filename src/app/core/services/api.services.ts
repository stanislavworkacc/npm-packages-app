import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(
      `${environment.api_url}${environment.api_version}search`,
      { params }
    )
  }
}
