export const IMAGE_NOT_FOUND = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1024x576.png'

export function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}