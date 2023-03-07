import React from 'react';

import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider/';
import { StoryMeta } from '@leafygreen-ui/lib';

import { Loader } from '.';

export default StoryMeta({
  title: 'Components/Loader',
  component: Loader,
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
      <Loader {...props} height={600} width={1000} />
    </LeafyGreenProvider>
  );
};

export const Basic = Template.bind({});
