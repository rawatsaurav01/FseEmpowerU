package com.stackroute.springdatajpamysql.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

	// Add Product entity fields, constructors and getters/setters here

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	private double price;
 
	public Product(Long id, String name, double price) {

		super();

		this.id = id;

		this.name = name;

		this.price = price;

	}
 
	public Product() {
 
	}
 
	public Long getId() {

		return id;

	}
 
	public void setId(Long id) {

		this.id = id;

	}
 
	public String getName() {

		return name;

	}
 
	public void setName(String name) {

		this.name = name;

	}
 
	public double getPrice() {

		return price;

	}
 
	public void setPrice(double price) {

		this.price = price;

	}
 
}

