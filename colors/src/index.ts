export const colors = {
  '--sl-color-primary-50': '#faf5ff',
  '--sl-color-primary-100': '#f3e8ff',
  '--sl-color-primary-200': '#e9d5ff',
  '--sl-color-primary-500': '#5663d4',
  // ...
};

export const colorClasses = Object.keys(colors).map((color) => ({
  class: color,
  style: `.${color} { background-color: var(${color}); }`,
}));
