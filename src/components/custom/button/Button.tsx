import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
  dark?: boolean;
  withLoading?: boolean;
  [x: string]: any;
}

const Button = ({
  className,
  children,
  dark,
  withLoading,
  ...props
}: Props) => {
  return (
    <button
      className={`${dark ? styles.button__dark : styles.button} ${className}`}
      disabled={withLoading}
      {...props}
    >
      {withLoading ? 'ЗАГРУЗКА' : children}
    </button>
  );
};

export default Button;
