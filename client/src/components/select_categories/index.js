import React from 'react'
import strings from './strings';
import { SelectStyled } from '../styles/styled_catalog'

const SelectCategories = ({ language, categories, handleSelect }) => {
	const s = strings[language];

	return (
		<label className="label-select">
			<span>{s.filter_category}</span>
			<SelectStyled onChange={handleSelect}>
				<option value="todos" >{s.all}</option>
				{!!categories.length && categories.map(category => (
					<option key={category.id} value={category[`name_${language}`]}>{category[`name_${language}`].toUpperCase()}</option>
				))}
			</SelectStyled>
		</label>
	)
}

export default SelectCategories
