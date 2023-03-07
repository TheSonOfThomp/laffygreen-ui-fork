import { ChangeEventHandler } from 'react';

import { HTMLElementProps } from '@leafygreen-ui/lib';

export interface PhoneNumberInputProps extends HTMLElementProps<'input'> {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
}
