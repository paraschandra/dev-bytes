"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/icon';

interface NavItemsProps {
    url: string;
    name: string;
    icon?: boolean;
}

export default function NavItems({url, name, icon}: NavItemsProps) {
  const pathname = usePathname();
  let Icon = icons[name as keyof typeof icons];
  return (
    <Link href={url} className={cn(
    "flex flex-col items-center justify-center text-xs sm:text-sm font-light sm:font-medium transition-colors hover:text-primary",
    pathname === url ? "text-primary" : "text-foreground"
    )}>
      {icon && <Icon className='w-5 h-5'/>}
      {name}
    </Link>
  )
}
