import { Component, OnInit } from '@angular/core'; // Used to define an Angular component
import { RouterOutlet } from '@angular/router'; // Allows navigation between different views
import { DataService } from './dervices/data.service'; // Imports the DataService to fetch API data
import { CommonModule } from '@angular/common'; // Provides common Angular directives

@Component({
  selector: 'app-root', // The HTML tag used to represent this component in the app
  imports: [RouterOutlet, CommonModule], // Importing modules for routing and common directives
  templateUrl: './app.component.html', // The HTML template for this component
  styleUrl: './app.component.css' // The CSS file for styling this component
})
export class AppComponent implements OnInit {
  
  // Define properties to store API data
  studentData: any[] = []; // Array to store student data
  weatherData: any[] = []; // Array to store weather data
  temparature: any = ""; // Variable to store temperature in Celsius
  
  // Inject DataService to fetch data from APIs
  constructor(private dataService: DataService) {}

  // Lifecycle hook that runs when the component initializes
  ngOnInit(): void {
    // Fetch student data when the component loads
    this.dataService.getStudentData().subscribe(
      (data) => {
        this.studentData = data.students; // Store the student data from the API response
      }
    );

    // Fetch weather data when the component loads
    this.dataService.getWeatherData().subscribe(
      (data) => {
        this.weatherData = data.weather; // Store weather information
        this.temparature = (data.main.temp - 273).toFixed(2); // Convert temperature from Kelvin to Celsius
      }
    );
  }
}
