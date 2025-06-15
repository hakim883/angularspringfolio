import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface About {
  id: number;
  fullName: string;
  bio: string;
  location: string;
  age: number;
  profession: string;
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private apiUrl = 'http://localhost:8083/api/about';

  constructor(private http: HttpClient) { }

  getAbout(): Observable<About> {
    return this.http.get<About>(this.apiUrl);
  }
}
