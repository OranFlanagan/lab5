import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './dervices/data.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  studentData:any[]=[];
  weatherData:any[]=[];
  temparature:any = "";
 constructor(private dataService:DataService){}

  ngOnInit(): void
  {
    this.dataService.getStudentData().subscribe(
      (data)=>{this.studentData = data.students;});

    this.dataService.getWeatherData().subscribe(
      (data)=>{this.weatherData = data.weather;
        this.temparature = (data.main.temp - 273).toFixed(2);
      });
  }
}
