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
      city: 'London',
      country: 'GB',
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

  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
