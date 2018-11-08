import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../icurrent-weather'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: new Date(),
      image: '',
      temperature: 0,
      description: '',
    } as ICurrentWeather
  }

  ngOnInit() {
    this.weatherService
      .getCurrentWeather(this.current.city, this.current.country)
      .subscribe(data => (this.current = data))
  }
}
