import React from 'react';

import Card from '@leafygreen-ui/card';
import { css, cx } from '@leafygreen-ui/emotion';
import { Body, H1, H2, Subtitle } from '@leafygreen-ui/typography';

import { baseCardStyles, baseSkeletonStyles } from './DatePicker.styles';

export const SkeletonCard = () => (
  <Card aria-hidden className={baseCardStyles}>
    <Subtitle
      className={cx(
        baseSkeletonStyles,
        css`
          width: 4ch;
        `,
      )}
    ></Subtitle>
    <H2
      className={cx(
        baseSkeletonStyles,
        css`
          width: 100%;
        `,
      )}
    ></H2>
    <H1
      className={cx(
        baseSkeletonStyles,
        css`
          width: 2ch;
        `,
      )}
    ></H1>
    <Body
      className={cx(
        baseSkeletonStyles,
        css`
          width: 100%;
          height: 4em;
        `,
      )}
    ></Body>
  </Card>
);
