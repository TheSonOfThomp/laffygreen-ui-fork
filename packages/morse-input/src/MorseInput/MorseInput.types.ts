import { TextInputProps } from '@leafygreen-ui/text-input';

export type MorseInputProps = TextInputProps & {
  /**
   * The duration of a dot, in ms
   */
  timeUnit?: number;
};
