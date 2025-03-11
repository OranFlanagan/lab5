import { Injectable } from '@angular/core'; // Makes this service injectable into components
import { HttpClient } from '@angular/common/http'; // Allows making HTTP requests
import { Observable } from 'rxjs'; // Handles asynchronous data streams

// Marks this service as injectable and available throughout the app
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Inject HttpClient so it can be used to make API requests
  constructor(private httpClient: HttpClient) { }
  
  //gets data from jsonblog api
  getStudentData(): Observable<any> {
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblog/1347544192825614336');
  }

  //gets data for galway weather
  getWeatherData(): Observable<any> {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }
}
