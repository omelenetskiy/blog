import { Button, type ButtonProps } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';

export interface ButtonLinkProps extends ButtonProps {
  label?: string;
  href?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  label,
  href,
  ...rest
}) => {
  if (href) {
    return (
      <Button asChild {...rest}>
        <Link href={href}>{label}</Link>
      </Button>
    );
  }

  return <Button {...rest}>{label}</Button>;
};
