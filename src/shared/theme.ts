import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  typography: {
    weights: {
      heading: 700,
      subheading: 400,
      body: 500
    }
  },
  colors: {
    mainBg: '250, 250, 250' || '#fafafa',
    white: '255, 255, 255' || '#ffffff',
    silver: '241, 241, 241' || '#f1f1f1',
    extraGrayish: '216, 216, 216' || '#d8d8d8',
    brand: '216, 125, 74' || '#d87d4a',
    accent: '251, 175, 133' || '#fbaf85',
    black: '0, 0, 0' || '#000000',
    smokeyBlack: '16, 16, 16' || '#101010'
  }
};

export { myTheme };
