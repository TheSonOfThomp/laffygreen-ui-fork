import { ButtonProps } from '@leafygreen-ui/button';

export interface CancelButtonProps extends Omit<ButtonProps, 'variant'> {
  container?: HTMLElement | Element | null;
}
