import React from 'react';

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

export function MobileNavLink({ href, onClick, children }: MobileNavLinkProps) {
  return (
    <a 
      href={href}
      className="block text-gray-300 hover:text-red-700 transition-colors text-sm tracking-widest"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        onClick();
      }}
    >
      {children}
    </a>
  );
}