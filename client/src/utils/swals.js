import Swal from 'sweetalert2';
const FIRE = (type = 'success', title, text, confirmButtonText = 'Ok', showCancelButton = false, cancelButtonText, preConfirm = null) => {
	return Swal.fire({
		heightAuto: false,
		title,
		text,
		showCancelButton,
		cancelButtonText,
		icon: type,
		confirmButtonText,
		showLoaderOnConfirm: true,
		preConfirm
	})
}

const OOPS = (language) => {
	if (language === 'en') {
		FIRE('warning', 'Oops, something went wrong');
	} else {
		FIRE('warning', 'Oh, algo ha fallado');
	}
}

const CONFIRMOK = (confirmTitle, confirmText, appearance, cb) => Swal.fire(
	confirmTitle,
	confirmText,
	appearance,
	cb
)

export default { FIRE, OOPS, CONFIRMOK }