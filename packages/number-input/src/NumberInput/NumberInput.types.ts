import { ChangeEventHandler } from 'react';

import { DarkModeProps, HTMLElementProps } from '@leafygreen-ui/lib';

export interface NumberInputProps
  extends DarkModeProps,
    Omit<HTMLElementProps<'input'>, 'onChange'> {
  max?: number;
  value?: number;
  // onChange?: (value: number) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
}
