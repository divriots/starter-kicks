import '../index.js';
import { themeShowcaseClasses, decorator } from '~/theme';
import '@divriots/dockit-core/showcases';

export default decorator;

export const fontFamilies = () => {
  const { fontFamilyClasses } = themeShowcaseClasses;
  return /*html*/ `<dockit-showcases
      component-type="text"
      showcase-classes="${fontFamilyClasses.map((cls) => cls.class).join(' ')}"
    ></dockit-showcases>
  `;
};

export const fontSizes = () => {
  const { fontSizeClasses } = themeShowcaseClasses;
  return /*html*/ `<dockit-showcases
      component-type="text"
      showcase-classes="${fontSizeClasses.map((cls) => cls.class).join(' ')}"
    ></dockit-showcases>
  `;
};

export const fontWeight = () => {
  const { fontWeightClasses } = themeShowcaseClasses;
  return /*html*/ `<dockit-showcases
      component-type="text"
      showcase-classes="${fontWeightClasses.map((cls) => cls.class).join(' ')}"
    ></dockit-showcases>
  `;
};

export const letterSpacing = () => {
  const { letterSpacingClasses } = themeShowcaseClasses;
  return /*html*/ `<dockit-showcases
      component-type="text"
      showcase-classes="${letterSpacingClasses
        .map((cls) => cls.class)
        .join(' ')}"
    ></dockit-showcases>
  `;
};

export const lineHeight = () => {
  const { lineHeightClasses } = themeShowcaseClasses;
  return /*html*/ `<dockit-showcases
      component-type="text"
      long-text
      showcase-classes="${lineHeightClasses.map((cls) => cls.class).join(' ')}"
    ></dockit-showcases>
  `;
};
