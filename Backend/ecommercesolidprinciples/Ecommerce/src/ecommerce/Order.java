package ecommerce;

import java.util.ArrayList;
import java.util.List;

public class Order {
	private List<Product> products=new ArrayList<>();
	private double totalAmount;
	
	public void addProduct(Product product) {
		products.add(product);
		totalAmount +=product.getPrice();
	}
	
	public void checkout(OrderProcessor orderProcessor) {
		orderProcessor.processOrder(this);
	}
	public double calculateTotalAmount() {
		return totalAmount;
	}
	

}
