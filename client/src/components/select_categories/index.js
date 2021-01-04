import React from 'react'
import strings from './strings';
import { SelectStyled } from '../styles/styled_catalog'

const SelectCategories = ({ language, categories, handleSelect }) => {
	return (
		<label className="label-select">
			<span>{strings[language].filter_category}</span>
			<SelectStyled onChange={handleSelect}>
				<option value="todos" >{strings[language].all}</option>
				{!!categories.length && categories.map(category => (
					<option key={category.id} value={category[`name_${language}`]}>{category[`name_${language}`].toUpperCase()}</option>
				))}
			</SelectStyled>
		</label>
	)
}

export default SelectCategories
