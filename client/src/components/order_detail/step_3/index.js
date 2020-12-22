import React from 'react';
import { Btn, FormStyled } from '../../styles/styled_global';
import { StyledSVG, StepTwo } from '../../styles/styled_order_detail';
import PurchaseStep3 from '../../../assets/img/purchase-steps-3.svg';
import { useHistory } from 'react-router-dom';

const Step3 = ({ cart }) => {
	const history = useHistory()
	const handleClick = () => {
		history.push('/')
	}

	return (
		<>
			<h2>Detalle de tu compra</h2>
			<StyledSVG src={PurchaseStep3} />
			<StepTwo>
				<div>
					<aside>
						<h3></h3>
						<FormStyled>
							<label>
								<span>Cupón de descuento</span>
								<input type='text' />
							</label>
						</FormStyled>
						<Btn onClick={handleClick} className='btn-ppal'>Finalizar Compra</Btn>
					</aside>
				</div>
			</StepTwo>
		</>
	)
}
export default Step3;