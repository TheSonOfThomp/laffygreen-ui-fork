import React from 'react';
import { ComponentStory } from '@storybook/react';

import { StoryMeta } from '@leafygreen-ui/lib';

import { MorseInput } from '.';

export default StoryMeta({
  title: 'Components/MorseInput',
  component: MorseInput,
  parameters: {
    default: 'Basic',
  },
  argTypes: {
    timeUnit: {
      control: 'number',
      defaultValue: 70,
    },
  },
  args: {
    label: 'Hello',
  },
});

const Template: ComponentStory<typeof MorseInput> = props => (
  <MorseInput {...props} />
);

export const Basic = Template.bind({});
