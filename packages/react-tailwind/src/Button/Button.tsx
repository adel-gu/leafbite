import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button
        className={[
          'leaf-bg-primary-500 hover:leaf-bg-primary-700',
          'active:leaf-bg-primary-800 leaf-text-neutral-white',
          'leaf-py-8 leaf-px-20',
          'leaf-rounded-large',
        ].join(' ')}
        {...rest}
        ref={ref}
        disabled={disabled || loading}
      />
    );
  },
);

Button.displayName = 'Button';
