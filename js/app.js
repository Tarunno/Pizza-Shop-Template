var client = document.querySelectorAll('.client');
var container = document.querySelector('.client-container');
var slider = document.querySelector('.client-slider');
var countPer = 0;

resize(client);
clone();
client = document.querySelectorAll('.client');
resize(client);
slide(client, container, slider);

window.addEventListener('resize', function() {
	resize(client);
	slide(client, container, slider);
});

function resize(client) {
	if (window.innerWidth <= 700) {
		client.forEach((item) => {
			item.style.width = window.innerWidth + 'px';
			countPer = 1;
		});
	} else if (window.innerWidth > 700 && window.innerWidth <= 1000) {
		client.forEach((item) => {
			item.style.width = window.innerWidth / 2 + 'px';
			countPer = 2;
		});
	} else if (window.innerWidth > 1000 && window.innerWidth <= 1500) {
		client.forEach((item) => {
			item.style.width = window.innerWidth / 3 + 'px';
			countPer = 3;
		});
	}
}

function slide(client, container, slider) {
	var clientWidth = client[0].clientWidth,
		containerWidth = container.clientWidth,
		sliderWidth = slider.clientWidth,
		countClient = client.length,
		count = 0;
	slider.style.transition = 'none';
	slider.style.transform = 'translateX(' + -clientWidth * count + 'px)';
	count++;
	var interval = setInterval(function() {
		if (count == countClient - countPer + 1) {
			count = 0;
			slider.style.transition = 'none';
			slider.style.transform = 'translateX(' + -clientWidth * count + 'px)';
			count = 1;
		} else {
			slider.style.transition = '.5s';
			slider.style.transform = 'translateX(' + -clientWidth * count + 'px)';
			count++;
		}
	}, 3500);
	window.addEventListener('resize', function() {
		clearInterval(interval);
	});
}

function clone() {
	for (i = 1; i <= countPer; i++) {
		var itm = client[i - 1].cloneNode(true);
		slider.appendChild(itm);
	}
}
