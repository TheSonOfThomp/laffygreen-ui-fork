import { css, keyframes } from '@leafygreen-ui/emotion';

const grow = keyframes`
  0% {
    scale: 0.3;
  }
  100% {
    scale: 6;
  } 
`;

export const toastStyles = css`
  scale: 0.3;
  transform-origin: top;
  animation: ${grow} 30000ms 1s cubic-bezier(0, 0, 1, 0) infinite;
`;
