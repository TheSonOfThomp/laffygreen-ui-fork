import { css } from '@leafygreen-ui/emotion';
import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { hoverRing, transitionDuration } from '@leafygreen-ui/tokens';

export const wrapperStyles = css`
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
  padding: 8px 12px 8px;
  border: 1px solid;
  margin-top: 4px;

  border-radius: 8px;
  transition: box-shadow ease-in-out ${transitionDuration.default}ms;
`;

export const wrapperThemeStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    border-color: ${palette.gray.base};
    background-color: ${palette.gray.light3};
    &:hover {
      box-shadow: ${hoverRing.light.gray};
    }
  `,
  [Theme.Dark]: css`
    border-color: ${palette.gray.base};
    background-color: ${palette.gray.dark4};
    &:hover {
      box-shadow: ${hoverRing.dark.gray};
    }
  `,
};
