package notificationApp;

import java.util.ArrayList;
import java.util.List;

public class NotificationService {
	
	private List<Notification> notificationQueue=new ArrayList<>();
	
	public void scheduleNotification(Notification notification,User user) {
		int frequency=user.getNotificationFrequency();
		notificationQueue.add(notification);
	}
	
	public void sendScheduleNotification() {
		for(Notification notification:notificationQueue) {
			notification.send();
		}
		notificationQueue.clear();
	}

}
