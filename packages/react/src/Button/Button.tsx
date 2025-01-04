import React, { forwardRef, ComponentProps } from 'react';
import { tokens } from '@leafbite/foundation';
import styled from 'styled-components';

interface ButtonProps extends ComponentProps<'button'> {
  disabled?: boolean;
  loading?: boolean;
  color: keyof typeof tokens.colors;
}

const ButtonStyled = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  padding: 2px ${tokens.sizes['12'].value};
  &:disabled {
    opacity: 40%;
  }
  transition: ${tokens.animations.default.value};
  color: ${tokens.colors.neutral.white.value};
  border-radius: ${tokens.radius.large.value};
  background-color: ${(props) => tokens.colors[props.color][500].value};
  &:hover {
    background-color: ${(props) => tokens.colors[props.color][700].value};
  }
  &:active {
    background-color: ${(props) => tokens.colors[props.color][800].value};
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled = false, loading = false, color = 'primary', ...props }, ref) => {
    return (
      <ButtonStyled
        ref={ref}
        {...props}
        disabled={disabled ?? loading}
        color={color}
      />
    );
  },
);

Button.displayName = 'Button';
