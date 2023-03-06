import React from 'react';
import { ComponentStory } from '@storybook/react';

import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { StoryMeta } from '@leafygreen-ui/lib';

import { NumberInput } from '.';

export default StoryMeta({
  title: 'Components/NumberInput',
  component: NumberInput,
  argTypes: {
    max: {
      type: 'number',
      defaultValue: 256,
    },
    label: {
      type: 'string',
      defaultValue: 'Label for NumberInput',
    },
  },
  parameters: {
    default: 'Basic',
    controls: {
      exclude: ['as', 'value'],
    },
  },
});

const Template: ComponentStory<typeof NumberInput> = props => (
  // eslint-disable-next-line react/prop-types
  <LeafyGreenProvider darkMode={props.darkMode}>
    <NumberInput {...props} />
  </LeafyGreenProvider>
);

export const Basic = Template.bind({});
