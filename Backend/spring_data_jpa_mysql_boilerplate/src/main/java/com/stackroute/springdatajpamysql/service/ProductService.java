package com.stackroute.springdatajpamysql.service;

import java.util.List;

import com.stackroute.springdatajpamysql.entity.Product;

//Create service interface here
public interface ProductService {

	List<Product> getAllProducts();

	List<Product> getAllProductsHavingPriceLessThan(double price);

	Product getProductById(Long id);

	Product saveProduct(Product product);

	Product updateProduct(Product updatedProduct, Long id);

	String deleteProduct(Long id);

}
