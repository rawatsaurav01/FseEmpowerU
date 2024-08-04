package assignment1;

public class Example{

	public static void main(String args []) {
		
		for(int i=0;i<10;i++) {
			Thread thread=new Thread(()->{
				Logger logger=Logger.getInstance();
				logger.log("Thread "+Thread.currentThread().getId()+ "is logging a message");
				//hashCode will remain same for every output
				System.out.println(logger.hashCode());
			});
			thread.start();
		}
	}
}
