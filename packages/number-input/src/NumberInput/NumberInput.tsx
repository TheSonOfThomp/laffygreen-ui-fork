import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { range } from 'lodash';

import Checkbox from '@leafygreen-ui/checkbox';
import { css } from '@leafygreen-ui/emotion';
import { useIdAllocator } from '@leafygreen-ui/hooks';
import { palette } from '@leafygreen-ui/palette';
import { hoverRing, transitionDuration } from '@leafygreen-ui/tokens';
import { Label } from '@leafygreen-ui/typography';

import { NumberInputProps } from './NumberInput.types';

export function NumberInput({
  min = 0,
  max = Math.pow(2, 8),
  onChange,
}: NumberInputProps) {
  // const { value, handleChange } = useControlledValue(valueProp, onChange);

  min = Math.round(Math.max(0, min));
  max = Math.round(max);
  const power: number = Math.log2(max);
  const id = useIdAllocator({ prefix: 'binary' });
  const ref = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState(0);

  function updateValue(e: ChangeEvent) {
    const { index } = (e.target as HTMLElement).dataset;
    const isChecked =
      e.target.getAttribute('aria-checked') === 'false' ? true : false; // invert this
    const checkVal = Math.pow(2, Number(index));

    if (isChecked) {
      setValue(value + checkVal);
    } else {
      setValue(value - checkVal);
    }
  }

  useEffect(() => {
    onChange?.(value);
  }, [onChange, value]);

  return (
    <>
      <form
        ref={ref}
        id={id}
        className={css`
          display: flex;
          flex-direction: row-reverse;
          gap: 8px;
          padding: 8px 12px 8px;
          border: 1px solid ${palette.gray.base};
          background-color: ${palette.gray.light3};
          border-radius: 8px;
          transition: box-shadow ease-in-out ${transitionDuration.default}ms;

          &:hover {
            box-shadow: ${hoverRing.light.gray};
          }
        `}
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
      </form>
    </>
  );
}

NumberInput.displayName = 'NumberInput';
