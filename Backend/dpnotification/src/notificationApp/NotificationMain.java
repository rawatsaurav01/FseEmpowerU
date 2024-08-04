package notificationApp;

public class NotificationMain {

	public static void main(String args[]) {
		
		NotificationFactory factory=new NotificationFactory();
		NotificationService service =new NotificationService();
		
		User user=new User();
		
		user.setNotificationFrequency(10);
		Notification emailNotify=factory.createNotification("email");
		Notification inAppNotify=factory.createNotification("inapp");
		Notification pushNotify=factory.createNotification("push");
		
		service.scheduleNotification(emailNotify,user);
		service.scheduleNotification(pushNotify,user);
		service.scheduleNotification(inAppNotify,user);
		
		service.sendScheduleNotification();
		
	}
}
