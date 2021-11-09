import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character} from "../models/character.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRemoteData(page: number): Observable<any> {
    return this.http.get(`https://api.disneyapi.dev/characters?page=${page}`);
  }
}

