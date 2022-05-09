import { createGlobalStyle } from 'styled-components';
// import { devices } from './breakpoints';
import { gridMixin, responsiveBaseFont } from './mixins';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    ${responsiveBaseFont};
}
body{
    height: auto;
    width: 100vw;
    overflow-x: hidden;
    font-family: 'Manrope', sans-serif;    
}
header{
    height: 10vh;
    width: 100%;
}
main{
    position: relative;
    min-height: 90vh;
    width: 100vw;
    background: #fff;
    overflow: hidden;
    ${gridMixin('1fr', 'auto')};
    /* TODO add suspense/lazy loading/content-loader */
    &>svg{
      width: 100%;
      height: 100%;
    }
    &>section{
      min-height: 90vh;
      padding-inline: 10%;
      width: 100%;
    }


}
#root{
  background: rgb(${({ theme }) => theme.colors.mainBg});
}

h1 {
  font-size: 4rem;
  letter-spacing: 0.175rem;
  font-weight: ${({ theme }) => theme.typography.weights.heading};
}
h2 {
  font-size: 2.8rem;
  letter-spacing: 0.15rem;
  font-weight: ${({ theme }) => theme.typography.weights.heading};

}
h3 {
  font-size: 2.4rem;
  letter-spacing: 0.125rem;
  font-weight: ${({ theme }) => theme.typography.weights.subheading};
}

p,
button,
select,
input,
textarea,
label,
div,
li,
a {
  font-size: 1.8rem;
  color: rgb(${({ theme }) => theme.colors.black});
}
li{
  text-decoration: none;
  list-style: none;
}
button{
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
