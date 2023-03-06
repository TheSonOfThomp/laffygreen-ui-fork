import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';

import Button from '@leafygreen-ui/button';
import { css } from '@leafygreen-ui/emotion';
import { transitionDuration } from '@leafygreen-ui/tokens';

import { CancelButtonProps } from './CancelButton.types';

const direction = (num: number) => (num === 0 ? 0 : num / Math.abs(num));

/**
 * This button _really_ doesn't want to be clicked
 */
export function CancelButton({
  children,
  container,
  ...rest
}: CancelButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove: MouseEventHandler = e => {
    setX(x + direction(e.movementX) * 10);
    setY(y + direction(e.movementY) * 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        setX(0);
        setY(0);
      },
      {
        root: container || document.body,
        threshold: [0, 0.5, 1],
      },
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, [container, buttonRef]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={css`
        padding: 2px;
        transition: transform linear ${transitionDuration.default}ms;
        transform: translate(${x}px, ${y}px);
      `}
    >
      <Button ref={buttonRef} variant="danger" {...rest}>
        {children || 'Cancel'}
      </Button>
    </div>
  );
}

CancelButton.displayName = 'CancelButton';
