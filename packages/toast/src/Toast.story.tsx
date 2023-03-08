import React, { useState } from 'react';

import Button from '@leafygreen-ui/button';
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
    body: 'Lorem ipsum dolor sit amet',
  },
});

type Props = ToastProps & { darkMode: boolean };

const Template = ({ darkMode, ...rest }: Props) => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    // eslint-disable-next-line react/prop-types
    <LeafyGreenProvider darkMode={darkMode}>
      <Button onClick={() => setToastOpen(o => !o)}>Pop toast</Button>
      {toastOpen && <Toast {...rest} />}
    </LeafyGreenProvider>
  );
};

export const Basic = Template.bind({});
