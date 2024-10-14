'use client'
 
/*

NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.
 
*/
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react';

import './NavLink.scss'

interface NavLinkProps extends ComponentProps<'a'> {
  href: string;
  exact: boolean;
}
 
export const NavLink = ({ href, exact, children, ...props }: NavLinkProps) => {
  const pathname = usePathname()
  const active = ' active'
  const isActive = exact ? pathname === href : pathname.startsWith(href)
 
  if (isActive) {
    props.className += active
  }
 
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}