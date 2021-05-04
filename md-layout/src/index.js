export { html } from 'lit-html';
import '@shoelace-style/shoelace/dist/themes/base.css';
import '@shoelace-style/shoelace/dist/shoelace.js';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
import { themeStyle } from '~/theme';

registerIconLibrary('default', {
  resolver: (name) =>
    `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`,
});

export { registerIconLibrary };

const setTheme = () => {
  const body = document.querySelector('body');
  body.setAttribute('class', 'sl-theme-ds');
  body.innerHTML = `${themeStyle}${body.innerHTML}`;
};

setTheme();
