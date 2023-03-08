import React from 'react';

import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { StoryMeta } from '@leafygreen-ui/lib';

import { ToastProps } from './Toast/Toast.types';
import { Toast } from '.';

export default StoryMeta({
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    default: 'Basic',
  },
  args: {
    darkMode: true,
    body: 'Body',
  },
});

type Props = ToastProps & { darkMode: boolean };

const Template = ({ darkMode, ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <LeafyGreenProvider darkMode={darkMode}>
      <Toast {...rest} />
    </LeafyGreenProvider>
  );
};

export const Basic = Template.bind({});
