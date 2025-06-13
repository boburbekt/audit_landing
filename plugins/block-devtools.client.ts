export default defineNuxtPlugin(() => {
  if (process.client) {
    // F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+C bloklash
    window.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    });

    // O‘ng tugmani bloklash
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // DevTools ochilganini aniqlashga urinish
    const devtoolsDetector = () => {
      const element = new Image();
      Object.defineProperty(element, 'id', {
        get() {
          throw new Error('DevTools detected');
        },
      });
      console.log(element);
    };

    setInterval(devtoolsDetector, 1000);
  }
});
