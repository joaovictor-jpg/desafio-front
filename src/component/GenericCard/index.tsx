import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GenericCardProps {
  title: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

export function GenericCard({ 
  title, 
  icon: Icon, 
  children, 
  className = "",
  action 
}: Readonly<GenericCardProps>) {
  return (
    <div 
      className={`
        bg-white dark:bg-zinc-900 
        border border-zinc-200 dark:border-zinc-800 
        rounded-xl shadow-sm 
        overflow-hidden 
        flex flex-col 
        ${className}
      `}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800/50">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
              <Icon size={20} strokeWidth={2.5} />
            </div>
          )}
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
            {title}
          </h3>
        </div>
        
        {action && (
          <div>{action}</div>
        )}
      </div>
      <div className="p-6 text-zinc-600 dark:text-zinc-400 flex-1">
        {children}
      </div>
    </div>
  );
}