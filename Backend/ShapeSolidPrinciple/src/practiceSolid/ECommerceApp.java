package practiceSolid;

public class ECommerceApp {
	public static void main(String[] args) {
		Product product1 = new Product("Laptop", 1000.0);
		Product product2 = new Product("Phone", 500.0);
		Order order = new Order();
		order.addProduct(product1);
		order.addProduct(product2);
		order.checkout();
	}
}
