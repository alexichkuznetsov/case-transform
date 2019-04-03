// Функция трансформации
function caseTransform(str, type, invertFirstLetter) {
	// Проверка передали ли значения для инвертирования первой буквы
	// Если не передали, то по умолчанию false
	invertFirstLetter = invertFirstLetter || false;

	// Проверка, что передали строку
	if (typeof str !== 'string') {
		throw new Error('Функция принимает на вход только строки');
	}

	// Проверка, что не пустая строка
	if (!str.length) {
		throw new Error('Строка не может быть пустой');
	}

	// Проверка, что переданы правильные типы преобразования
	if (type !== 'lower' && type !== 'upper') {
		throw new Error(
			'В качестве типа преобразования необходимо передать "lower" либо "upper"'
		);
	}

	// Проверка, что указан тип преобразования
	if (!type) {
		throw new Error('Не указан тип преобразования строки');
	}

	var transformedString = '';

	// Проверка на инвертирование первой буквы
	if (invertFirstLetter) {
		if (type === 'lower') {
			transformedString += toUpperCase(str[0]);
		} else if (type === 'upper') {
			transformedString += toLowerCase(str[0]);
		}
	} else {
		if (type === 'lower') {
			transformedString += toLowerCase(str[0]);
		} else if (type === 'upper') {
			transformedString += toUpperCase(str[0]);
		}
	}

	// length = str.length - чтобы на каждой итерации не пересчитывалась длина строки
	for (var i = 1, length = str.length; i < length; i++) {
		var char = str[i];

		if (type === 'lower') {
			char = toLowerCase(char);
		} else if (type === 'upper') {
			char = toUpperCase(char);
		}

		transformedString += char;
	}

	return transformedString;

	// Функции-помощники (helper functions)
	// Функция перевода символа в нижний регистр
	function toLowerCase(char) {
		// ASCII-код символа
		var charCode = char.charCodeAt(0);

		// Проверка, что символ - буква
		if (charCode < 65 || charCode > 90) {
			// Возвращаем символ как есть
			return char;
		}

		var lowerCaseCharCode = charCode + 32;

		return String.fromCharCode(lowerCaseCharCode);
	}

	// Функция перевода символа в верхний регистр
	function toUpperCase(char) {
		// ASCII-код символа
		var charCode = char.charCodeAt(0);

		// Проверка на то, что символ - буква
		if (charCode < 97 || charCode > 122) {
			return char;
		}

		var upperCaseCharCode = charCode - 32;

		return String.fromCharCode(upperCaseCharCode);
	}
}

// Проверка функции
console.log(caseTransform('Abc', 'upper', 'yes'));
console.log(caseTransform('tHis IS a TEST!..', 'lower'));
