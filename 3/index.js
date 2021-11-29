const findFirstStringInBracket = (str) => {
	if (!str.includes('(') || !str.includes(')')) return '';
	if (str.indexOf(')') < str.indexOf('(')) return ''
	return str.substring(str.indexOf('(') + 1, str.indexOf(')'));
};
console.log(findFirstStringInBracket('saya )(test) lagi'));
