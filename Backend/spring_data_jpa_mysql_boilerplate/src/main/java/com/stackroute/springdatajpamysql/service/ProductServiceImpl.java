package com.stackroute.springdatajpamysql.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.springdatajpamysql.entity.Product;
import com.stackroute.springdatajpamysql.repository.ProductRepo;

@Service
public class ProductServiceImpl implements ProductService {
 
	@Autowired
	private ProductRepo productRepo;
 
	// Retrieve all products from the database.

	@Override
	public List<Product> getAllProducts() {
		List<Product> findAll = this.productRepo.findAll();
		return findAll;

	}
 
	// Retrieve all products from the database having price less than some specified

	// price given by user.

	@Override
	public List<Product> getAllProductsHavingPriceLessThan(double price) {
		List<Product> productByPrice =this.productRepo.findProductsLessThanPrice(price);
		return productByPrice;
	}
 
	// Retrieve a product by its ID.

	@Override
	public Product getProductById(Long id) {
		Product product =this.productRepo.findById(id).get();
		return product;
	}
 
	// Save a new product and return the same product as response.

	@Override
	public Product saveProduct(Product product) {
		Product save =this.productRepo.save(product);
		return save;
	}
 
	// Update an existing product by its ID and return the same as response.

	@Override
	public Product updateProduct(Product updatedProduct, Long id) {
		Product product =this.productRepo.findById(id).get();
		product.setName(updatedProduct.getName());
		product.setPrice(updatedProduct.getPrice());
		return this.productRepo.save(product);
	}
 
	// Delete a product by its ID and return the response as "Product Deleted".

	@Override
	public String deleteProduct(Long id) {
		this.productRepo.deleteById(id);
		return "Product Deleted";
	}
 
}
