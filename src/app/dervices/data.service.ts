import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getStudentData():Observable<any>
  {
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblog/1347544192825614336')
  }

  getWeatherData():Observable<any>
  {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303')
  }
}
