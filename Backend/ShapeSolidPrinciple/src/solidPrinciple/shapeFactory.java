package solidPrinciple;

public class shapeFactory {

	static Shape createShape(String shapeType) {
		if(shapeType == null){  
            return null;  
           }  
		
		if(shapeType.trim().equalsIgnoreCase("circle")) {
			return new Circle();
		}
		else if(shapeType.trim().equalsIgnoreCase("rectangle")) {
			return new Rectangle();
		}
		else if(shapeType.trim().equalsIgnoreCase("square")) {
			return new Square();
		}
		
		else {
			return null;
		}
		
	}
}
