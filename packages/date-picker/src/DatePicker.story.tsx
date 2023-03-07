import React from 'react';
import { ComponentStory } from '@storybook/react';

import { DatePicker } from '.';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: ComponentStory<typeof DatePicker> = props => (
  <DatePicker {...props} />
);

export const Basic = Template.bind({});
