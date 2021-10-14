export default function validator(data, config) {
	const errors = {}

	function validate(method, data, config) {
		let status

		switch (method) {
			case 'required': {
				status = data.trim() === ''
				break
			}
			case 'isString': {
				const strRegExp = /^[A-Za-zА-Яа-я]+$/g
				status = !strRegExp.test(data)
				break
			}
			case 'length': {
				status = data.trim().length !== 4
				break
			}
			case 'isNum': {
				status = isNaN(Number(data))
				break
			}
			case 'isCorrect': {
				status = new Date().getFullYear() < Number(data)
				break
			}
			case 'isUrl': {
				const urlRegExp = /https?:\/\/(\w+\.)+\w+/g
				status = !urlRegExp.test(data)
				break
			}
			default:
				return
		}

		return status ? config.message : null
	}

	for (const field in data) {
		for (const validateMethod in config[field]) {
			const error = validate(
				validateMethod,
				data[field].value,
				config[field][validateMethod]
			)
			if (error && !errors[field]) errors[field] = error
		}
	}
	return errors
}
