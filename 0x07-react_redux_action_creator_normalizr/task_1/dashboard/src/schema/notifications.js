import * as data from '../../notifications.json'
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const normalizedData = normalize(data, [notification]);

export default normalizedData;
