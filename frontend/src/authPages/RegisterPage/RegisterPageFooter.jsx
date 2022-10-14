import { CustomPrimaryButton, RedirectInfo } from '../../shared/components';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormMessage = (isFormValid) => {
	if (isFormValid) {
		return 'Register';
	} else {
		return 'Enter correct email address and password';
	}
};

export const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
	const navigate = useNavigate();

	return (
		<>
			<Tooltip
				title={
					<h3 style={{ fontSize: '0.8rem' }}>{getFormMessage(isFormValid)}</h3>
				}
			>
				<div>
					<CustomPrimaryButton
						label='Register'
						additionalStyles={{ marginTop: '2rem' }}
						disabled={!isFormValid}
						onClick={handleRegister}
					/>
				</div>
			</Tooltip>
			<RedirectInfo
				text='Already have an account? '
				redirectText='Sign in'
				additionalStyles={{ marginTop: '0.5rem' }}
				redirectHandler={() => navigate('/login')}
			/>
		</>
	);
};