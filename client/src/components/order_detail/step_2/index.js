import React from 'react';
import { useHistory } from 'react-router-dom';
import CreditCard from '../step_2/CreditCard';
//------>Styles
import { Btn, FormStyled } from '../../styles/styled_global';
import { StyledSVG, StepTwo } from '../../styles/styled_order_detail';
import PurchaseStep2 from '../../../assets/img/purchase-steps-2.svg';

const Step2 = ({ cart }) => {
	const history = useHistory()
	const handleClick = () => {
		history.push('/order/detail')
	}

	return (
		<>
			<h2>Datos de pago</h2>
			<StyledSVG src={PurchaseStep2} />
			<CreditCard />
			<StepTwo>
				<div>
					<Btn onClick={handleClick} className='btn-ppal'>Siguiente</Btn>
				</div>
			</StepTwo>
		</>
	)
}
export default Step2;