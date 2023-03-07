import { css, keyframes } from '@leafygreen-ui/emotion';
import { palette } from '@leafygreen-ui/palette';

export const baseCardStyles = css`
  position: absolute;
  inset: 0;
  transform-origin: 0 50%;
  overflow: hidden;
  user-select: none;
`;

const shimmer = keyframes`
  0% {
    background-position: 0%;
  }
  100% {
    background-position: -150%;
  } 
`;

export const baseSkeletonStyles = css`
  background-color: lightgray;
  border-radius: 4px;
  height: 1em;
  margin: 0.25em 0;

  background: linear-gradient(
    135deg,
    ${palette.gray.light2},
    ${palette.gray.light2},
    ${palette.gray.light3},
    ${palette.gray.light2},
    ${palette.gray.light2}
  );
  background-size: 400%;

  animation: ${shimmer} 1s ease-in-out infinite;
`;
