import * as data from '../../notifications.json'

export default function getAllNotificationsByUser(userId) {
  const notifications = data;
  return notifications.filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
