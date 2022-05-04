import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;

  width: 100%;
  height: 660px;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const SpinRing = styled.div`
  width: 32px;
  height: 32px;

  border: 6px solid ${({ theme }) => theme.mode.mainText};
  border-top: 6px solid ${({ theme }) => theme.mode.mainColor};
  border-radius: 50%;

  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
