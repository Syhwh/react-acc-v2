export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  fontSizes: [10, 12, 14, 16, 18, 20, 24],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: [1, 1.2, 1.29, 1.71, 2.14],
  colors: {
    text: '#000',
    background: '#FCF9EC',
    primary: '#113034',
    secondary: '#88979A',
    muted: '#EAE4CE',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: [3, 4],
      fontWeight: 'heading',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    subHeading: {
      fontFamily: 'heading',
      letterSpacing: '0.18em',
      ontWeight: 'bold',
      lineHeight: [2],
      fontSize: [0, 1],
      textTransform: 'uppercase',
    },
    regular: {
      fontFamily: 'body',
      color: 'red',
      lineHeight: [1],
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
    },
    h2: {
      variant: 'text.subHeading',
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    p: {
      variant: 'text.regular',
    },
  },
};
