import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class Fetchdata {
    forecasts = [];

    constructor(http) {
        http.fetch('api/SampleData/WeatherForecasts')
            .then(result => result.json())
            .then(data => {
                this.forecasts = data;
            }); 
    }
}
