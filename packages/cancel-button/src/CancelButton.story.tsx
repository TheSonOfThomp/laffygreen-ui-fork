import React from 'react';
import { ComponentStory } from '@storybook/react';

import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { StoryMeta } from '@leafygreen-ui/lib';

import { CancelButton } from '.';

export default StoryMeta({
  title: 'Components/CancelButton',
  component: CancelButton,
  parameters: {
    default: 'Basic',
    controls: {
      exclude: ['container'],
    },
  },
  args: {},
});

const Template: ComponentStory<typeof CancelButton> = ({
  // eslint-disable-next-line react/prop-types
  darkMode,
  ...props
}) => (
  <LeafyGreenProvider darkMode={darkMode}>
    <CancelButton
      {...props}
      container={
        document.querySelector('#story--components-cancelbutton--basic') ||
        document.querySelector('#root')
      }
    />
  </LeafyGreenProvider>
);

export const Basic = Template.bind({});
