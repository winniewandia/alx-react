import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
    const state = fromJS({
        filter: 'DEFAULT',
        notifications: [
        { id: 1, type: 'urgent', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
        ],
    });
    
    it('filterTypeSelected', () => {
        expect(filterTypeSelected(state)).toEqual('DEFAULT');
    });
    
    it('getNotifications', () => {
        expect(getNotifications(state)).toEqual(state.get('notifications'));
    });
    
    it('getUnreadNotifications', () => {
        expect(getUnreadNotifications(state).toJS()).toEqual(state.get('notifications').toJS());
    });
});