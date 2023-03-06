import React, { ChangeEvent, useEffect, useRef } from 'react';
import { range } from 'lodash';

import Checkbox from '@leafygreen-ui/checkbox';
import { css, cx } from '@leafygreen-ui/emotion';
import { useControlledValue, useIdAllocator } from '@leafygreen-ui/hooks';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { createSyntheticEvent } from '@leafygreen-ui/lib';
import { Label } from '@leafygreen-ui/typography';

import { wrapperStyles, wrapperThemeStyles } from './NumberInput.styles';
import { NumberInputProps } from './NumberInput.types';

/**
 * Input any Integer in a way computers will understand
 */
export function NumberInput({
  max = Math.pow(2, 8),
  value: valProp = 0,
  onChange: onChangeProp,
  label,
}: NumberInputProps) {
  const { theme } = useDarkMode();
  max = Math.round(max);
  const power: number = Math.log2(max);
  const id = useIdAllocator({ prefix: 'binary' });
  const ref = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { value, handleChange, setInternalValue } = useControlledValue(
    valProp?.toFixed(),
    onChangeProp,
  );

  /**
   * When a checkbox is changed, fire this and change the internal value
   */
  function updateValue(e: ChangeEvent) {
    const { index } = (e.target as HTMLElement).dataset;
    const isChecked =
      e.target.getAttribute('aria-checked') === 'false' ? true : false; // invert this
    const checkVal = Math.pow(2, Number(index));

    if (isChecked) {
      setInternalValue((Number(value) + checkVal).toFixed());
    } else {
      setInternalValue((Number(value) - checkVal).toFixed());
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      const nativeEvt = new Event('change', { bubbles: true });
      const event = createSyntheticEvent(nativeEvt, inputRef.current);

      handleChange(event);
    }
  }, [handleChange, value]);

  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <form
        ref={ref}
        id={id}
        className={cx(wrapperStyles, wrapperThemeStyles[theme])}
      >
        <Label htmlFor={id}>{value}</Label>

        {range(power).map((_, i) => (
          <Checkbox
            key={i}
            aria-label={Math.pow(2, i).toFixed(0)}
            data-index={i}
            id={id + '-' + i}
            onChange={updateValue}
          />
        ))}
        <input
          ref={inputRef}
          aria-hidden
          type="number"
          value={Number(value)}
          onChange={e => {
            handleChange(e);
          }}
          className={css`
            position: absolute;
            visibility: hidden;
          `}
        />
      </form>
    </>
  );
}

NumberInput.displayName = 'NumberInput';
