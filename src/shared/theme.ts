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
    accent: '250, 150, 97' || '#fa9661',
    black: '0, 0, 0' || '#000000',
    smokeyBlack: '16, 16, 16' || '#101010',
    davysGray: '76, 76, 76' || '#4c4c4c',
    spanishGray: '151, 151, 151' || '#979797',
    inputGray: '207, 207, 207' || '#cfcfcf',
    ctaRed: '205, 44, 44' || '#cd2c2c'
  }
};

export { myTheme };
