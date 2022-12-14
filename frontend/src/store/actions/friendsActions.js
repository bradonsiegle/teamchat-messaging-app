import { showAlert } from './alertActions';
import * as api from '../../api';

export const friendsActions = {
	SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
	SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
	SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

export const sendFriendInvitation = (data, closeDialogHandler) => {
	return async (dispatch) => {
		const response = await api.sendFriendInvitation(data);

		if (response.error) {
			dispatch(showAlert(response.exception.response.data?.message), 'error');
		} else {
			dispatch(showAlert('Invitation sent successfully', 'success'));
			closeDialogHandler();
		}
	};
};

export const setPendingFriendInvitations = (pendingInvitations) => {
	return {
		type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
		payload: pendingInvitations,
	};
};

export const setFriends = (friends) => {
	return {
		type: friendsActions.SET_FRIENDS,
		payload: friends,
	};
};

export const setOnlineUsers = (onlineUsers) => {
	return {
		type: friendsActions.SET_ONLINE_USERS,
		payload: onlineUsers,
	};
};

export const acceptFriendInvitation = (data) => {
	return async (dispatch) => {
		const response = await api.acceptFriendInvitation(data);

		if (response.error) {
			dispatch(showAlert(response.exception.response.data?.message), 'error');
		} else {
			dispatch(showAlert('Invitation accepted successfully', 'success'));
		}
	};
};

export const rejectFriendInvitation = (data) => {
	return async (dispatch) => {
		const response = await api.rejectFriendInvitation(data);

		if (response.error) {
			dispatch(showAlert(response.exception.response.data?.message), 'error');
		} else {
			dispatch(showAlert('Invitation rejected successfully', 'success'));
		}
	};
};
