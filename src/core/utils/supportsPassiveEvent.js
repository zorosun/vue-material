let supportsPassive = false;

try {
  const options = Object.defineProperty({}, 'passive', {
    get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('test', null, options);
} catch (error) {
  throw new Error(error);
}

export default supportsPassive;
