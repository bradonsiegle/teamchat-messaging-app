import { styled } from '@mui/system';
import { AddFriendButton } from './AddFriendButton';

const MainContainer = styled('div')({
	width: '13rem',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: '#2F3136',
});

export const FriendsSideBar = () => {
	return (
		<MainContainer>
			<AddFriendButton />
		</MainContainer>
	);
};
