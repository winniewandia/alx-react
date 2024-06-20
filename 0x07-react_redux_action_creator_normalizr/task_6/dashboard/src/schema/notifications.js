import * as data from '../../notifications.json'
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});
export const normalizedData = normalize(data, [notification]);

export function getAllNotificationsByUser(userId) {
  const { entities: { notifications, messages }, result } = normalizedData;
  
  return result
    .filter(id => notifications[id].author === userId)
    .map(id => messages[notifications[id].context]);
}


