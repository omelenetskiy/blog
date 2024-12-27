interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline';
  component?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

const variantClasses = {
  h1: 'text-5xl font-extrabold',
  h2: 'text-4xl font-bold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-xl font-bold',
  h6: 'text-lg font-bold',
  subtitle1: 'text-base font-medium',
  subtitle2: 'text-sm font-medium',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs text-gray-500',
  overline: 'text-xs uppercase text-gray-400',
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  component: Component = 'p',
  children,
  className = '',
}) => {
  return (
    <Component className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export { Typography };
