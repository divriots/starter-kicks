import { styleDefinitions, themeClassDefinitions } from './index';

export const decorator = {
  decorators: [
    (story) => `<div style="${styleDefinitions}">
        <style>
          ${themeClassDefinitions}
        </style>
        ${story()}
      </div>`,
  ],
};
