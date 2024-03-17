import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; // Import operators from RxJS

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '27e5fe4194fb4865a1b04935241703';
  apiUrl = 'http://api.weatherapi.com/v1/current.json'; // Corrected API endpoint

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}`;
    return this.http.get(url).pipe(
      tap(data => console.log('Weather data:', data)),
      catchError(error => {
        console.error('Error fetching weather data:', error);
        return throwError(error);
      })
    );
  }
}
