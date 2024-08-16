//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function strip(bands) {
	return bands.replace(/^(a |an |the )/i, '').trim();
}
const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);
const bandList = document.querySelector('#band');
bandList.innerHTML = sortedBands.map(bands =>`<li>${band}</li>`).join('');