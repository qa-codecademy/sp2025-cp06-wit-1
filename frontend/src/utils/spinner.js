const createSpinner = () => {
  if (!document.getElementById('spinner')) {
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.style.cssText = `
      position: fixed;
      top: 0; left: 0; 
      width: 100%; height: 100%;
      background: rgba(255, 255, 255, 0.8);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      opacity: 0;
    `;

    const loader = document.createElement('div');
    loader.classList.add('loader');

    spinner.appendChild(loader);
    document.body.appendChild(spinner);
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
