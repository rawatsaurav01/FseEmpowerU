package com.stackroute.resttemplate.model;

public class Current {

    private String observation_time;
    private String temperature;
    private String weather_code;
    private String wind_speed;
    private String wind_degree;

    public Current() {
    }

    public Current(String observation_time, String temperature, String weather_code, String wind_speed, String wind_degree) {
        this.observation_time = observation_time;
        this.temperature = temperature;
        this.weather_code = weather_code;
        this.wind_speed = wind_speed;
        this.wind_degree = wind_degree;
    }

    public String getObservation_time() {
        return observation_time;
    }

    public void setObservation_time(String observation_time) {
        this.observation_time = observation_time;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getWeather_code() {
        return weather_code;
    }

    public void setWeather_code(String weather_code) {
        this.weather_code = weather_code;
    }

    public String getWind_speed() {
        return wind_speed;
    }

    public void setWind_speed(String wind_speed) {
        this.wind_speed = wind_speed;
    }

    public String getWind_degree() {
        return wind_degree;
    }

    public void setWind_degree(String wind_degree) {
        this.wind_degree = wind_degree;
    }
}
