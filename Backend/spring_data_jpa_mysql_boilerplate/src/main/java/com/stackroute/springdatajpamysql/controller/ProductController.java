package com.stackroute.springdatajpamysql.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.springdatajpamysql.entity.Product;
import com.stackroute.springdatajpamysql.service.ProductService;

@RestController
public class ProductController {
 
	@Autowired
	private ProductService productService;
 
	// Add controllers here for CRUD operations on Product entity.

	// GET /products: Retrieve a list of all products.

	@GetMapping(value = "/products", produces = "application/json")
	public ResponseEntity<List<Product>> getAllProducts() {
		List<Product> allProducts = this.productService.getAllProducts();
		return new ResponseEntity<List<Product>>(allProducts, HttpStatus.OK);
 
	}
 
	// GET /products/{price}: Retrieve a list of all products having price less than

	// specified price.

	@GetMapping("/products/{price}")
	public ResponseEntity<List<Product>> getAllProductsHavingPriceLessThan(@PathVariable("price") double price) {
		List<Product> allProductsHavingPriceLessThan = this.productService.getAllProductsHavingPriceLessThan(price);
		return new ResponseEntity<List<Product>>(allProductsHavingPriceLessThan, HttpStatus.OK);
	}
 
	// GET /products/{id}: Retrieve a product by its ID.

	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable("id") Long id) {
		Product productById = this.productService.getProductById(id);
		return new ResponseEntity<Product>(productById, HttpStatus.OK);
 
	}
 
	// POST /products: Create a new product.

	@PostMapping("/products")
	public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
		Product saveProduct = this.productService.saveProduct(product);
		return new ResponseEntity<Product>(saveProduct, HttpStatus.OK);
	}
 
	// PUT /products/{id}: Update an existing product.

	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@RequestBody Product updatedProduct, @PathVariable("id") Long id) {
		Product updateProduct = this.productService.updateProduct(updatedProduct, id);
		return new ResponseEntity<Product>(updateProduct, HttpStatus.OK);
 
	}
 
	// DELETE /products/{id}: Delete a product by its ID.

	@DeleteMapping("/products/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable("id") Long id) {
		this.productService.deleteProduct(id);
		return new ResponseEntity<String>("Product Deleted", HttpStatus.OK);
	}
 
}
