import React from 'react';

import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { StoryMeta } from '@leafygreen-ui/lib';

import { Toast } from '.';

export default StoryMeta({
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    default: 'Basic',
  },
  args: {
    darkMode: true,
  },
});

const Template = props => {
  return (
    // eslint-disable-next-line react/prop-types
    <LeafyGreenProvider darkMode={props.darkMode}>
      <Toast {...props} />
    </LeafyGreenProvider>
  );
};

export const Basic = Template.bind({});
