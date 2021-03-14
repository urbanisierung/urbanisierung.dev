import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Router, NavigationEnd } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { DevToArticle } from '../types/DevToArticle.type'
import { DEV_TO_ARTICLES } from '../constants/url.constant'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DevToService {
  constructor(private http: HttpClient) {}

  public get(): Observable<DevToArticle[]> {
    return this.http.get<DevToArticle[]>(DEV_TO_ARTICLES)
  }
}
