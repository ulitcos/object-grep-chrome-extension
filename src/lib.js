import { objectGrep } from 'object-grep';

window.addEventListener("load", () => {
  try {
    objectGrep.inject('__grep__');
  } catch(e) {
    console.error('[Object grep error]: Object.prototype already has method grep. Injection failed.')
  }
});
