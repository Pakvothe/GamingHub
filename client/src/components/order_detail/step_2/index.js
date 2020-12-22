import React from 'react';
import { Btn, FormStyled } from '../../styles/styled_global';
import { StyledSVG, StepTwo } from '../../styles/styled_order_detail';
import PurchaseStep2 from '../../../assets/img/purchase-steps-2.svg';
import { useHistory } from 'react-router-dom';

const Step2 = ({ cart }) => {
	const history = useHistory()
	const handleClick = () => {
		history.push('/order/detail')
	}

	return (
		<>
			<h2>Datos de pago</h2>
			<StyledSVG src={PurchaseStep2} />
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
						<Btn onClick={handleClick} className='btn-ppal'>Siguiente</Btn>
					</aside>
				</div>
			</StepTwo>
		</>
	)
}
export default Step2;