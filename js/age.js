let ageEl = document.getElementById("age");

setInterval(() => {
	let time = dayjs().diff(dayjs('2006-07-05'), 'year', true);
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);