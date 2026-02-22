'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';

import type { MenuItem } from '@/lib/types';

/* =========================
   Navbar Item
========================= */

type NavbarItemProps = {
	active?: boolean;
	path: string;
	children: React.ReactNode;
	onClick?: () => void;
};

export function NavbarItem(props: NavbarItemProps) {
	const { children, path, active = false, onClick } = props;

	if (active) {
		return (
			<li className='relative cursor-pointer rounded-md px-3 py-2 font-medium text-sm text-teal-500'>
				<span className='absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent'></span>
				<Link href={path} className='outline-none' onClick={onClick}>
					{children}
				</Link>
			</li>
		);
	}

	return (
		<li className='cursor-pointer rounded-md px-3 py-2 font-medium text-foreground text-sm hover:text-teal-500'>
			<Link href={path} className='outline-none' onClick={onClick}>
				{children}
			</Link>
		</li>
	);
}

/* =========================
   Navbar
========================= */

type NavbarProps = {
	links: MenuItem[];
};

export function Navbar({ links }: NavbarProps) {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<div className='relative'>
			{/* ================= DESKTOP NAV ================= */}
			<ul className='hidden items-center gap-1 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-foreground shadow-md backdrop-blur-md lg:flex'>
				{links.map((link) => (
					<NavbarItem key={link.path} path={link.path} active={pathname === link.path}>
						{link.title}
					</NavbarItem>
				))}
			</ul>

			{/* ================= MOBILE MENU BUTTON ================= */}
			<button
				onClick={() => setOpen(!open)}
				className='flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-5 py-2 font-medium text-base text-zinc-800 shadow-md backdrop-blur-md lg:hidden dark:text-zinc-200'
				aria-label='Toggle menu'
			>
				Menu
				<span className='flex items-center'>
					{open ? (
						<svg width='16' height='16' viewBox='0 0 24 24'>
							<path d='M6 15l6-6 6 6' stroke='currentColor' strokeWidth='2' fill='none' />
						</svg>
					) : (
						<svg width='16' height='16' viewBox='0 0 24 24'>
							<path d='M6 9l6 6 6-6' stroke='currentColor' strokeWidth='2' fill='none' />
						</svg>
					)}
				</span>
			</button>

			{/* ================= MOBILE DROPDOWN ================= */}
			{open && (
				<div className='absolute left-0 mt-3 w-44 rounded-2xl border border-white/10 bg-background/80 p-2 shadow-lg backdrop-blur-md lg:hidden'>
					<ul className='flex flex-col gap-1'>
						{links.map((link) => (
							<NavbarItem key={link.path} path={link.path} active={pathname === link.path} onClick={() => setOpen(false)}>
								{link.title}
							</NavbarItem>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

Navbar.displayName = 'Navbar';
