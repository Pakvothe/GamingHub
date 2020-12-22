import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreditCard from '../step_2/CreditCard';
import { addCreditCard } from '../../../redux/actions/global_actions';
//------>Styles
import { StyledSVG, StepTwo } from '../../styles/styled_order_detail';
import PurchaseStep2 from '../../../assets/img/purchase-steps-2.svg';

const Step2 = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = (credCard) => {
		dispatch(addCreditCard(credCard));
		history.push('/order/detail')
	}

	return (
		<>
			<h2>Datos de pago</h2>
			<StyledSVG src={PurchaseStep2} />
			<StepTwo>
				<CreditCard handleSubmit={handleSubmit} />
			</StepTwo>
		</>
	)
}
export default Step2;