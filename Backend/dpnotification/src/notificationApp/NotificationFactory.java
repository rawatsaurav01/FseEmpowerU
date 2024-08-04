package notificationApp;

public class NotificationFactory {
	
	public Notification createNotification(String type) {
		switch(type) {
		
		case "push":
			return new PushNotification();
		case "email":
			return new EmailNotification();
		case "inapp":
			return new InAppMessaging();
		default:
			throw new IllegalArgumentException("Invalid Notification Type!");
		}
	}

}
