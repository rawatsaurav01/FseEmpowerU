package assignment1;

public class Logger {
	private static Logger logger;
	private Logger() {
		
	}
	
	//Lazy way of creating single object
	public static Logger getInstance() {
		if(logger==null){
			//two threads can enter at the same time.
			synchronized(Logger.class) {
				if(logger==null) {
					logger=new Logger();
				}
			}
		}
		return logger;
	}
	
	public void log(String message) {
		System.out.println(message);
	}

}
