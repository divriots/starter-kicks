export const fontFamilies = {
  '--sl-font-sans': `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  '--sl-font-serif': `Georgia, 'Times New Roman', serif`,
  '--sl-font-mono': `Menlo, Monaco, 'Courier New', monospace`,
};

export const fontSizes = {
  '--sl-font-size-xx-small': '0.625rem',
  '--sl-font-size-x-small': '0.75rem',
  '--sl-font-size-small': '0.875rem',
  '--sl-font-size-medium': '1rem',
  '--sl-font-size-large': '1.25rem',
  '--sl-font-size-x-large': '1.5rem',
  '--sl-font-size-xx-large': '2.25rem',
  '--sl-font-size-xxx-large': '3rem',
  '--sl-font-size-xxxx-large': '4.5rem',
};

export const fontWeight = {
  '--sl-font-weight-light': '300',
  '--sl-font-weight-normal': '400',
  '--sl-font-weight-semibold': '500',
  '--sl-font-weight-bold': '700',
};

export const letterSpacing = {
  '--sl-letter-spacing-dense': '-0.015em',
  '--sl-letter-spacing-normal': 'normal',
  '--sl-letter-spacing-loose': '0.075em',
};

export const lineHeight = {
  '--sl-line-height-dense': '1.4',
  '--sl-line-height-normal': '1.8',
  '--sl-line-height-loose': '2.2',
};

export const typography = {
  ...fontFamilies,
  ...fontSizes,
  ...fontWeight,
  ...letterSpacing,
  ...lineHeight,
};

export const typographyClasses = {
  fontFamilyClasses: Object.keys(fontFamilies).map((fontFamily) => ({
    class: fontFamily,
    style: `.${fontFamily} { font-family: var(${fontFamily}); }`,
  })),
  fontSizeClasses: Object.keys(fontSizes).map((fontSize) => ({
    class: fontSize,
    style: `.${fontSize} { font-size: var(${fontSize}); }`,
  })),
  fontWeightClasses: Object.keys(fontWeight).map((weight) => ({
    class: weight,
    style: `.${weight} { font-weight: var(${weight}); }`,
  })),
  letterSpacingClasses: Object.keys(letterSpacing).map((spacing) => ({
    class: spacing,
    style: `.${spacing} { letter-spacing: var(${spacing}); }`,
  })),
  lineHeightClasses: Object.keys(lineHeight).map((height) => ({
    class: height,
    style: `.${height} { line-height: var(${height}); }`,
  })),
};
