import { ReactNode } from 'react';
import { cls } from '../libs/utils';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="fixed top-0 mx-auto flex w-full max-w-xl items-center justify-center border-b bg-white py-3 text-lg font-medium text-gray-800">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls('pt-16', hasTabBar ? 'pb-16' : '')}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 flex max-w-xl items-center justify-between border-t bg-white pb-10 pt-3 text-gray-800"></nav>
      ) : null}
    </div>
  );
}
