import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';
import { gridMixin } from './mixins';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    @media ${devices.mobileSS}{
      font-size: 27%;
    }
    @media ${devices.mobileS}{
      font-size: 40%;
    }
    @media ${devices.mobileM}{
      font-size: 45%;
    }
    @media ${devices.mobileL}{
      font-size: 55%;
    }
    @media ${devices.tablet}{
      font-size: 65%;
    }
    @media ${devices.laptopM}{
      font-size: 58.5%;
    }
    @media ${devices.laptopL}{
      font-size: 60.5%;
    }
    @media ${devices.laptopXL}{
      font-size: 65%;
    }
    @media ${devices.desktop}{
      font-size: 100%;
    }
    @media ${devices.landscapeMobileSS}{
      font-size: 22%;
    }
    @media ${devices.landscapeMobileS}{
      font-size: 32.5%;
    }
    @media ${devices.landscapeMobileM}{
      font-size: 40%;
    }
    @media ${devices.landscapeMobileL}{
      font-size: 45%;
    }
    @media ${devices.desktop4K}{
      font-size: 135%;
    }
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
