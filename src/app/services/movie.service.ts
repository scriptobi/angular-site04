import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = "https://api.themoviedb.org/3/movie/455551/recommendations?api_key=67d0d348f7698d9ef813da424cb3c005&language=fr-FR&page=1";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie> {
     return this.http.get<Movie>(this.url);
  }

}