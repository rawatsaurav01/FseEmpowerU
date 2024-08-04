package com.stackroute.springdatajpamysql.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.springdatajpamysql.entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
 
	@Query(value = "select p from Product p where p.price < ?1")
	List<Product> findProductsLessThanPrice(double price);
 
}