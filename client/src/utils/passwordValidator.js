const strings = {
	en: {
		lower: 'Must contain a lowercase letter',
		upper: 'Must contain an uppercase letter',
		number: 'Must contain a number',
		special: 'Must contain a special character',
		size: 'Must be between 8 and 15 characters in length'
	},
	es: {
		lower: 'Una letra minúscula',
		upper: 'Una letra mayúscula',
		number: 'Un número',
		special: 'Un caracter especial',
		size: 'Tener entre 8 y 15 caracteres de extensión'
	}
}

export default (input, language) => {
	const s = strings[language];
	let errors = [];
	if (!/[a-z]/.test(input)) errors.push(s.lower + ' (a-z)');
	if (!/[A-Z]/.test(input)) errors.push(s.upper + ' (A-Z)');
	if (!/[0-9]/.test(input)) errors.push(s.number + ' (0-9)');
	if (!/[^a-zA-Z0-9]/.test(input)) errors.push(s.special + ' (- _ ! @ # $ %)');
	if (input.length < 8 || input.length > 15) errors.push(s.size);
	return errors;
}