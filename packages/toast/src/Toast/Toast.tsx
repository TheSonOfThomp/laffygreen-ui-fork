import React from 'react';

import { toastStyles } from './Toast.styles';

export function Toast() {
  return (
    <div>
      <img
        className={toastStyles}
        src="https://assets.codepen.io/125292/toast.png"
        alt="toast"
      />
    </div>
  );
}

Toast.displayName = 'Toast';
