import { objectGrep } from 'object-grep';

try {
  objectGrep.inject();
} catch(e) {
  console.error('[Object grep error]: Object.prototype already has method grep. Injection failed.')
}

