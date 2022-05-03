import { createGlobalStyle } from 'styled-components';
import { Normalize } from '@/styles';

const GlobalStyle = createGlobalStyle`
  ${Normalize}
  
  body {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
    'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  letter-spacing: -0.02rem;
  background-color: #6868AB;
  }

  * {
    color: ${({ theme }) => theme.mode.mainText};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${({ theme }) => theme.mode.title};
    margin: 0;
  }

  svg  {
    cursor: pointer;
    
    path {
      stroke: ${({ theme }) => theme.mode.mainText};
    }
  }
`;

export default GlobalStyle;
