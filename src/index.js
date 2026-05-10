const menuButton = document.querySelector('.menu-button');
const menuPanel = document.querySelector('.menu-panel');
const smth = document.querySelector('.smth');

if (menuButton && menuPanel && smth) {
	const setMenuState = (isOpen) => {
		document.body.classList.toggle('menu-open', isOpen);
		menuButton.setAttribute('aria-expanded', String(isOpen));
		menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
	};

	menuButton.addEventListener('click', () => {
		setMenuState(!document.body.classList.contains('menu-open'));
	});

	document.addEventListener('click', (event) => {
		if (!document.body.classList.contains('menu-open')) {
			return;
		}

		if (menuButton.contains(event.target) || menuPanel.contains(event.target)) {
			return;
		}

		setMenuState(false);
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			setMenuState(false);
		}
	});
}
