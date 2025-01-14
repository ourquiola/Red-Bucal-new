const validateDate = (date) => {
	console.log(date)
	const dateSplited = date.split('/')

	const invalidFormat = 'Formato de fecha invalido (dd/mm/aaaa)'

	if (!dateSplited) return [false, invalidFormat]
	if (dateSplited.length !== 3) return [false, invalidFormat]

	let errorNumber = false
	dateSplited.forEach(num => isNaN(Number(num)) ? errorNumber = true : null)
	if (errorNumber) return [false, invalidFormat]

	let [day, month, year] = dateSplited
	if (!(day.length === 1 || day.length === 2)) return [false, invalidFormat]
	if (!(month.length === 1 || month.length === 2)) return [false, invalidFormat]
	if (year.length !== 4) return [false, invalidFormat]
	if (month < 1 || month > 12) return [false, 'El mes está fuera de rango']
	if (day < 1 || day > getMonthMaxDay(month, year)) return [false, 'El día está fuera de rango']

	return [true, 'Fecha valida']
}

const getMonthMaxDay = (month, year) => {
	const date = new Date(Number(year), Number(month) - 1, 27)
	let nextDay = date.getDate()
	while (nextDay !== 1) {
		nextDay = date.getDate(date.setDate(date.getDate() + 1))
	}
	return date.getDate(date.setDate(date.getDate() - 1))
}

export default validateDate