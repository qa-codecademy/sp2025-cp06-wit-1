const createSpinner = () => {
	if (!document.getElementById('spinner')) {
		const spinner = document.createElement('div');
		spinner.id = 'spinner';
		spinner.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(255, 255, 255, 0.85);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      opacity: 0;
      flex-direction: column;
      text-align: center;
      padding: 20px;
    `;

		const loader = document.createElement('div');
		loader.classList.add('logo-loader');

		const svgContainer = document.createElement('div');
		svgContainer.style.cssText = `
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
      animation: pulseLogo 1.5s infinite ease-in-out;
      display: inline-block;
    `;

		svgContainer.innerHTML = `<img src="./src/assets/when-in-trouble-logo-cmyk.svg" alt="Organization Logo" style="width: 100%; height: 100%;">`;

		const quote = document.createElement('p');
		quote.id = 'quote-text';
		quote.textContent = 'Helping someone right now...';
		quote.style.cssText = `
      font-size: 18px;
      font-weight: 500;
      color: #3498db;
      max-width: 300px;
      animation: fadeIn 2s ease-in-out infinite;
    `;

		loader.appendChild(svgContainer);
		loader.appendChild(quote);
		spinner.appendChild(loader);
		document.body.appendChild(spinner);

		// Add animations styles
		const style = document.createElement('style');
		style.textContent = `
      @keyframes fadeIn {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }

      @keyframes pulseLogo {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.2);
          opacity: 0.7;
        }
      }
    `;
		document.head.appendChild(style);

		const quotes = [
			'Kindness in action...',
			'Making a difference together...',
			'Support is on the way...',
			'Every small act counts...',
			'Helping someone right now...',
		];

		let current = 0;
		setInterval(() => {
			const quoteElement = document.getElementById('quote-text');
			if (quoteElement) {
				current = (current + 1) % quotes.length;
				quoteElement.textContent = quotes[current];
			}
		}, 3500);
	}
};

const showSpinner = () => {
	createSpinner(); // Ensure it's there
	const spinner = document.getElementById('spinner');
	if (spinner) {
		spinner.style.display = 'flex';
		requestAnimationFrame(() => {
			spinner.style.opacity = '1';
		});
	}
};

const hideSpinner = () => {
	const spinner = document.getElementById('spinner');
	if (spinner) {
		spinner.style.transition = 'opacity 0.3s ease';
		spinner.style.opacity = '0';
		setTimeout(() => {
			spinner.style.display = 'none';
			spinner.style.transition = ''; // Reset
		}, 600);
	}
};

export default { showSpinner, hideSpinner };
