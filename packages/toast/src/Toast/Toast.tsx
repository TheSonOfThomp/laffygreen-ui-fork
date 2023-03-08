import React from 'react';

import { bodyStyles, toastStyles } from './Toast.styles';
import { ToastProps } from './Toast.types';

export function Toast({ body }: ToastProps) {
  return (
    <div className={toastStyles}>
      <img src="https://assets.codepen.io/125292/toast.png" alt="toast" />
      <span className={bodyStyles}>{body}</span>
    </div>
  );
}

Toast.displayName = 'Toast';
