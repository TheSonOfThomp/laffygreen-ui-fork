import React from 'react';
import { ComponentStory } from '@storybook/react';

import { PhoneNumberInput } from '.';

export default {
  title: 'Components/PhoneNumberInput',
  component: PhoneNumberInput,
};

const Template: ComponentStory<typeof PhoneNumberInput> = props => (
  <PhoneNumberInput {...props} />
);

export const Basic = Template.bind({});
