package com.stackroute.resttemplate.service;

import com.stackroute.resttemplate.model.Weather;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    //add your api key here
    private static final String API_KEY = "8ec2f6de033252ed7d55c54874266a4b";

    //add the base api url here
    private static final String API_URL = "http://api.weatherstack.com/current";

    private final RestTemplate restTemplate;
    public WeatherService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    //using rest template, get the weather details of a city
    public Weather getWeather(String city) {
    	String url=API_URL+"?access_key="+API_KEY+"&query="+city;
    	return restTemplate.getForObject(url,Weather.class);
    	
   }


}
