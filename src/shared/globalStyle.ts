import { createGlobalStyle } from 'styled-components';
import { flexMixin, gridMixin, responsiveBaseFont } from './mixins';

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
    scrollbar-width: thin;
    scrollbar-color: rgba(241, 245, 249, 0.2) transparent;
    scrollbar-track-color: transparent;

    ::-webkit-scrollbar {
        width: 7.5px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgb(${({ theme }) => theme.colors.brand});
        border-radius: 20px;
        border: transparent;
    }
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

    .loading{
      position: relative;
      ${flexMixin('center', 'center', 'column')};
      svg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
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
