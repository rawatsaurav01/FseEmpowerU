package solidPrinciple;

public class shapeDrawingApp {

	public static void main(String [] args) {
		Shape circle=shapeFactory.createShape("circle");
		Shape rectangle=shapeFactory.createShape("rectangle");
		
		circle.draw();
		rectangle.draw();
//		System.out.println("hi");
	}
}
