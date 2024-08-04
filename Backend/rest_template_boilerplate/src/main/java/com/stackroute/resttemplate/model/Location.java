package com.stackroute.resttemplate.model;

public class Location {

    private String name;
    private String country;
    private String region;
    private String timezone_id;

    public Location() {
    }

    public Location(String name, String country, String region, String timezone_id) {
        this.name = name;
        this.country = country;
        this.region = region;
        this.timezone_id = timezone_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getTimezone_id() {
        return timezone_id;
    }

    public void setTimezone_id(String timezone_id) {
        this.timezone_id = timezone_id;
    }
}
