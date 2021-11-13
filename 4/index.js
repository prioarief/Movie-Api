const findAnagram = (words = []) => {
	let anagrams = [];
	let temp = {};
	for (let i = 0; i < words.length; i++) {
		const key = words[i].split('').sort().join('');
		if (!temp[key]) {
			temp[key] = [words[i]];
		} else {
			temp[key].push(words[i]);
		}
	}
	for (let objKey in temp) {
		anagrams.push(temp[objKey]);
	}
	return anagrams;
};

console.log(
	findAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'])
);
// expected result = [
//   [ 'kita', 'atik', 'tika' ],
//   [ 'aku', 'kua' ],
//   [ 'kia' ],
//   [ 'makan' ]
// ]
