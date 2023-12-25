import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url: string = 'https://open-weather13.p.rapidapi.com/city/landon';
  XRapidAPIKeyName: string = 'X-RapidAPI-Key';
  XRapidAPIKeyValue: string =
    'b88f912c61msh6c3ff301b2f7ccdp1fd139jsn964af084e5d5';

  XRapidAPIHostName: string = 'X-RapidAPI-Host';
  XRapidAPIHostValue: string = 'open-weather13.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.url, {
      headers: new HttpHeaders()
        .set(this.XRapidAPIHostName, this.XRapidAPIHostValue)
        .set(this.XRapidAPIKeyName, this.XRapidAPIKeyValue),
      params: new HttpParams().set('city', city),
    });
  }
}
