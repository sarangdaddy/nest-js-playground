import Link from 'next/link';
import { ReactNode } from 'react';

interface FloatingButtonProps {
  children: ReactNode;
  href: string;
}

const FloatingButton = ({ children, href }: FloatingButtonProps) => {
  return (
    <Link
      className="fixed bottom-24 right-5 flex aspect-square w-14 cursor-pointer items-center justify-center rounded-full border-0 border-transparent bg-orange-400 text-white shadow-xl transition-colors hover:bg-orange-500"
      href={href}
    >
      {children}
    </Link>
  );
};

export default FloatingButton;
