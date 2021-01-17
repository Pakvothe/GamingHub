import Axios from "axios";
import Swal from 'sweetalert2';
import { openVideo } from "../../redux/actions/global_actions";
import { rickys, powerRangers } from './utils';

export default (input, addToast, dispatch) => {
	if (input.length <= 1) return;
	let command = input.slice(1);
	let value;
	if (/:/.test(command)) {
		value = command.match(/(?<=:)\w*/)[0].trim();
		command = command.match(/\w*(?=:)/)[0];
	}
	switch (command) {
		case 'joke': joke();
			break;
		case 'rainbow': rainbow();
			break;
		case 'color': color(value);
			break;
		case 'ricky': displayImgs(rickys);
			break;
		case 'surprise': surprise(dispatch);
			break;
		case 'powerRanger': displayImgs(powerRangers);
			break;
		case 'party': party()
			break;
		default:
			command = '';
			break;
	}
	if (command) addToast(`The '${command}' command was Activated!`, { appearance: 'success' });
}

const joke = () => {
	Axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
		.then((res) => {
			let joke = res.data[0];
			Swal.fire({
				title: joke.setup,
				text: joke.punchline
			})
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

const color = (value) => {
	if (!value) return;
	value = value.toLowerCase();
	let colors = ['', '', '', '', ''];
	switch (value) {
		case 'red': colors = ['#dc142c', '#990000', '#770000'];
			break;
		case 'green': colors = ['#33b309', '#248118', '#147713'];
			break;
		case 'yellow': colors = ['#daca0d', '#d9b00c', '#d9980b'];
			break;
		case 'blue': colors = ['#1D32F2', '#131FBD', '#090C87'];
			break;
		case 'orange': colors = ['#D6470F', '#A3360C', '#702508'];
			break;
		default:
			break;
	}
	document.querySelector('html').style.setProperty('--clr-primary', colors[0]);
	document.querySelector('html').style.setProperty('--clr-primary-2', colors[2]);
	document.querySelector('html').style.setProperty('--clr-secondary', colors[1]);
	document.querySelector('html').style.setProperty('--clr-secondary-3', colors[1]);
	document.querySelector('html').style.setProperty('--clr-secondary-2', colors[2]);
}

const displayImgs = (array) => {
	let imgs = document.querySelectorAll('.about_coders_container img');
	let copyArray = [...array];
	imgs.forEach(each => {
		each.src = copyArray.splice(Math.floor(Math.random() * copyArray.length), 1)
	});
}

const surprise = (dispatch) => {
	dispatch(openVideo('dQw4w9WgXcQ'));
}

const party = () => {
	document.querySelector('.partyBar-container').classList.toggle('showBar');
}