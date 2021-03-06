import styled from 'styled-components';

import { flexMixin } from 'shared/mixins';

export const StyledBanner = styled.div`
  height: 17.5vh;
  width: 100%;
  background: rgb(${({ theme }) => theme.colors.black});
  border-top: 0.25rem solid rgba(${({ theme }) => theme.colors.white}, 0.104);
  padding-block: 5vh;
  ${flexMixin('center', 'center', 'row')};

  h1 {
    color: rgb(${({ theme }) => theme.colors.white});
    font-size: 3.25rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
  }
`;
