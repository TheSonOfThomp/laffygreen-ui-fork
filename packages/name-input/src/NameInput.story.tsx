import React from 'react';
import { ComponentStory } from '@storybook/react';

import { css } from '@leafygreen-ui/emotion';

import { NameInput } from '.';

export default {
  title: 'Components/NameInput',
  component: NameInput,
};

const Template: ComponentStory<typeof NameInput> = props => (
  <form
    className={css`
      display: flex;
      gap: 8px;
    `}
  >
    <NameInput label="Given name" nameType="given" {...props} />
    <NameInput label="Family name" nameType="family" {...props} />
  </form>
);

export const Basic = Template.bind({});
