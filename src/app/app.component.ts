import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('Paris').subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  title = 'Angular_project';
}
