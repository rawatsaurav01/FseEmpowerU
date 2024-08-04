package practiceSolid;

import java.util.ArrayList;
import java.util.List;

class Order {
	private List<Product> products = new ArrayList<>();
	private double totalAmount;

	public void addProduct(Product product) {
		products.add(product);
		totalAmount += product.getPrice();
	}

	public void checkout() {
		// Perform order processing, payment, and shipping logic here
		System.out.println("Order processed successfully.");
	}
}