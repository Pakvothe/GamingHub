const orders = [
	{
		email: 'emi@mail.com',
		total_amount: 12,
		state: 'created',
		payment_method: 'mp',
		userId: 1
	},
	{
		email: 'cosme@mail.com',
		total_amount: 2233,
		state: 'created',
		payment_method: 'mp',
		userId: 2
	},
	{
		email: 'emi@mail.com',
		total_amount: 12,
		state: 'processing',
		payment_method: 'mp',
		userId: 1
	},
	{
		email: 'cosme@mail.com',
		total_amount: 2233,
		state: 'processing',
		payment_method: 'mp',
		userId: 2
	},
	{
		email: 'emi@mail.com',
		total_amount: 12,
		state: 'completed',
		payment_method: 'cash',
		userId: 1
	},
	{
		email: 'nacho@mail.com',
		total_amount: 2233,
		state: 'completed',
		payment_method: 'cash',
		userId: 2
	}
]

module.exports = orders;