'use client'
 
/*

NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.
 
*/
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import './NavLink.scss'
 
export const NavLink = ({ href, exact, children, ...props }) => {
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