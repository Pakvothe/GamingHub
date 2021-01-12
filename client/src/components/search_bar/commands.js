import Axios from "axios";

export default (input) => {
	if (input.length <= 1) return;
	let command = input.slice(1);
	switch (command) {
		case 'joke': joke();
			break;
		case 'rainbow': rainbow();
			break;
		default:
			break;
	}
}

const joke = () => {
	Axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
		.then((res) => {
			let joke = res.data[0];
			alert(joke.setup + joke.punchline);
		})
}


const getRandomColor = () => {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		if (i % 2 !== 0) {
			color += letters[Math.floor(Math.random() * 16)];
		} else {
			color += letters[Math.floor(Math.random() * 3)]; //darker colors
		}
	}
	return color;
}
var data = { interval: null, save: null };
const rainbow = () => {
	let nav = document.querySelector('nav');
	let color;
	nav.style.transition = 'background 1s linear';
	if (!data.interval) {
		data.save = nav.style.background;
		data.interval = setInterval(() => {
			color = getRandomColor()
			nav.style.background = color;
		}, 1000)
	} else {
		nav.style.background = data.save;
		clearInterval(data.interval);
		data.interval = null;
	}
}
