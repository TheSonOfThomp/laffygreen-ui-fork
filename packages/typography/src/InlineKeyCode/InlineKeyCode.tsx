import React from 'react';
import { cx } from '@leafygreen-ui/emotion';
import { codeTypeScaleStyles } from '../styles';
import { useUpdatedBaseFontSize } from '../utils/useUpdatedBaseFontSize';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import {
  inlineKeyCodeStyles,
  inlineKeyCodeColor,
} from './InlineKeyCode.styles';
import { InlineKeyCodeProps } from './InlineKeyCode.types';

function InlineKeyCode({
  darkMode: darkModeProp,
  children,
  className,
  ...rest
}: InlineKeyCodeProps) {
  const baseFontSize = useUpdatedBaseFontSize();

  const { theme } = useDarkMode(darkModeProp);

  return (
    <code
      className={cx(
        inlineKeyCodeStyles,
        inlineKeyCodeColor[theme],
        codeTypeScaleStyles[baseFontSize],
        className,
      )}
      {...rest}
    >
      {children}
    </code>
  );
}

InlineKeyCode.displayName = 'InlineKeyCode';

export default InlineKeyCode;