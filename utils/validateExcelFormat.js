export const validateAseguradora = (excel) => {
	if (excel[0][0] === "RED BUCAL S.A." &&
		excel[1][0] === "REPORTE SEMANAL" &&
		excel[2][0] === "INDIVIDUALES REFERIDOS" &&
		excel[3][0] === "AGENTE: CLINICA" &&
		excel[4][0] === "TYPO:" &&
		excel[4][1] === "Asegurados" &&
		excel[5][0] === "MES:" &&
		excel[6][0] === "IMPUESTO [%]" &&
		excel[7][0] === "CUOTA POR ASEGURADO [$]" &&
		excel[8][0] === "NOMBRE Y APELLIDO*" &&
		excel[8][1] === "CEDULA*\r\n(Si es una cédula panameña debe incluir los guiones)" &&
		excel[8][2] === "Dependiente de quíen?\r\n(Si el individuo es dependiente de otro usuario, diligencie el número de documento del usuario principal en este campo. De lo contrario deje este espacio vacío.)" &&
		excel[8][3] === "F. NACIMIENTO*\r\n(El formato de la fecha debe ser DD/MM/AA)") {
		return true
	} else {
		return false
	}
}

export const validateEmpresa = (excel) => {
	if (excel[0][0] === "RED BUCAL S.A." &&
		excel[1][0] === "REPORTE SEMANAL" &&
		excel[2][0] === "INDIVIDUALES REFERIDOS" &&
		excel[3][0] === "AGENTE: CLINICA" &&
		excel[4][0] === "TYPO:" &&
		excel[4][1] === "Empresa" &&
		excel[5][0] === "MES:" &&
		excel[6][0] === "IMPUESTO [%]" &&
		excel[7][0] === "CUOTA POR ASEGURADO [$]" &&
		excel[8][0] === "NOMBRE Y APELLIDO*" &&
		excel[8][1] === "CEDULA*\r\n(Si es una cédula panameña debe incluir los guiones)" &&
		excel[8][2] === "Dependiente de quíen?\r\n(Si el individuo es dependiente de otro usuario, diligencie el número de documento del usuario principal en este campo. De lo contrario deje este espacio vacío.)" &&
		excel[8][3] === "F. NACIMIENTO*\r\n(El formato de la fecha debe ser DD/MM/AA)" &&
		excel[8][4] === "EMAIL" &&
		excel[8][5] === "TELÉFONO CELULAR") {
		console.log('todo es verdadero')
		return true
	} else {
		console.log('algo es falso')
		return false
	}
}