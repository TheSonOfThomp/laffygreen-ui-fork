import React from 'react';
import { ComponentStory } from '@storybook/react';

import { VolumePicker } from '.';

export default {
  title: 'Components/VolumePicker',
  component: VolumePicker,
};

const Template: ComponentStory<typeof VolumePicker> = props => (
  <VolumePicker {...props} />
);

export const Basic = Template.bind({});
