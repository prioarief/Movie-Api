const findFirstStringInBracket = (str) => {
	if (!str.includes('(') || !str.includes(')')) return '';
	return str.substring(str.indexOf('(') + 1, str.indexOf(')'));
};
console.log(findFirstStringInBracket('halo halooo (haloo)'));
