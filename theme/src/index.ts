import merge from 'deepmerge';
import { colors, colorClasses } from '~/colors';
import { typography, typographyClasses } from '~/typography';

export const theme = merge.all([colors, typography]);

export const themeShowcaseClasses = {
  colorClasses,
  ...typographyClasses,
};

export const themeClassDefinitions = Object.values(themeShowcaseClasses)
  .flatMap((e) => e)
  .map(({ style }) => style)
  .join('\n');

export const styleDefinitions = Object.entries(theme)
  .map(([key, value]) => `  ${key}: ${value};`)
  .join('\n');

export const themeStyle = `
<style>
  .sl-theme-ds {
${styleDefinitions}
</style>
`;
