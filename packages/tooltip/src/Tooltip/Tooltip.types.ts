import { HTMLElementProps } from '@leafygreen-ui/lib';
import {
  Align as PopoverAlign,
  ElementPosition,
  Justify,
  PopoverProps,
} from '@leafygreen-ui/popover';
import { BaseFontSize } from '@leafygreen-ui/tokens';

export const TriggerEvent = {
  Hover: 'hover',
  Click: 'click',
} as const;

export type TriggerEvent = typeof TriggerEvent[keyof typeof TriggerEvent];

export const Align = {
  Top: PopoverAlign.Top,
  Bottom: PopoverAlign.Bottom,
  Left: PopoverAlign.Left,
  Right: PopoverAlign.Right,
} as const;

export type Align = typeof Align[keyof typeof Align];

export { Justify };

export interface PopoverFunctionParameters {
  align: Align;
  justify: Justify;
  referenceElPos: ElementPosition;
}

type ModifiedPopoverProps = Omit<PopoverProps, 'active' | 'adjustOnMutation'>;

export type TooltipProps = Omit<
  HTMLElementProps<'div'>,
  keyof ModifiedPopoverProps
> &
  ModifiedPopoverProps & {
    /**
     * A slot for the element used to trigger the `Tooltip`.
     */
    trigger?: React.ReactElement | Function;

    /**
     * Determines if a `hover` or `click` event will trigger the opening of a `Tooltip`.
     * @default 'hover'
     */
    triggerEvent?: TriggerEvent;

    /**
     * Controls component and determines the open state of the `Tooltip`
     * @default `false`
     */
    open?: boolean;

    /**
     * Callback to change the open state of the `Tooltip`.
     */
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;

    /**
     * Whether the `Tooltip` will appear in dark mode.
     * @default false
     */
    darkMode?: boolean;

    /**
     * id given to `Tooltip` content.
     */
    id?: string;

    /**
     * Callback to determine whether or not `Tooltip` should close when user tries to close it.
     *
     */
    shouldClose?: () => boolean;

    /**
     * Enables Tooltip to trigger based on the event specified by `triggerEvent`.
     * @default true
     */
    enabled?: boolean;

    /**
     * Callback that is called when the tooltip is closed internally. E.g. on ESC press, on backdrop click, on blur.
     *
     */
    onClose?: () => void;

    /**
     * Allows consuming applications to override font-size as set by the LeafyGreen Provider.
     *
     */
    baseFontSize?: BaseFontSize;
  };
