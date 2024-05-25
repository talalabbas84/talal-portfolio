import { cn } from '@/libs/utils';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, link, isIcon, className }) => {
  return (
    <>
      {link ? (
        <Link href={link} target='_blank' className='w-10 h-10 cursor-pointer'>
          <ButtonBody isIcon={isIcon} className={className}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <div>
          <ButtonBody isIcon={isIcon} className={className}>
            {children}
          </ButtonBody>
        </div>
      )}
    </>
  );
};

interface ButtonBodyProps {
  children: ReactNode;
  isIcon?: boolean;
  className?: string;
}

const ButtonBody: FC<ButtonBodyProps> = ({ children, isIcon, className }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground  text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100',
        className,
        isIcon ? 'h-10 w-10' : 'h-full w-max px-3 py-2'
      )}
    >
      {children}
    </div>
  );
};

export default Button;
