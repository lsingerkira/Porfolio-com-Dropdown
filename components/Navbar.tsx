'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type React from 'react';

import type { MenuItem } from '@/lib/types';

type NavbarItemProps = {
	active?: boolean;
	path: string;
	children: React.ReactNode;
};

export function NavbarItem(props: NavbarItemProps) {
	const { children, path, active = false } = props;
	if (active) {
		return (
			<li className='relative cursor-pointer gap-1 bg-transparent px-3 py-2 font-medium text-sm text-teal-500 leading-6 focus-visible:ring focus-visible:ring-teal-400'>
				<span className='absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-15% from-transparent via-teal-500 to-transparent'></span>
				<a href={path}>{children}</a>
			</li>
		);
	}

	return (
		<li className='cursor-pointer gap-1 rounded-md px-3 py-2 font-medium text-foreground text-sm leading-6 focus-within:ring focus-within:ring-teal-400 hover:text-teal-500'>
			<Link href={path} className='outline-none'>
				{children}
			</Link>
		</li>
	);
}

type NavbarProps = {
	links: MenuItem[];
};

export function Navbar(props: NavbarProps) {
	const { links } = props;

	const currentPath = usePathname();

	return (
		<ul className='flex items-center gap-1 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-foreground shadow-black/30 shadow-md backdrop-blur-md'>
			{links?.map((link) => (
				<NavbarItem key={link.path} path={link.path} active={currentPath === link.path}>
					{link.title}
				</NavbarItem>
			))}
		</ul>
	);
}

Navbar.displayName = 'Navbar';
