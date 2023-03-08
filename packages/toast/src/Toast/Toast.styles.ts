import { css, keyframes } from '@leafygreen-ui/emotion';

const grow = keyframes`
  to {
    scale: 6;
  } 
`;

const shake = keyframes`
  0% {
    translate: 0% -3%;
  } 
  100% {
    translate: 0% 3%;
  }
`;

export const toastStyles = css`
  scale: 0.3;
  transform-origin: top;
  translate: 0% 0%;
  animation-name: ${grow}, ${shake};
  animation-duration: 30000ms, 2s;
  animation-timing-function: cubic-bezier(0, 0, 1, 0), ease-in-out;
  animation-delay: 1s, 1s;
  animation-iteration-count: infinite;
  animation-direction: normal, alternate;
  animation-fill-mode: none, both;
`;
