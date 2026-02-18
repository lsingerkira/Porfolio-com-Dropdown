import Image from 'next/image';
import type React from 'react';

type NavbarItemProps = {
	active?: boolean;
	path: string;
	children: React.ReactNode;
};

function NavbarItem(props: NavbarItemProps) {
	const { children, path, active = false } = props;
	if (active) {
		return (
			<li className='relative cursor-pointer gap-1 bg-transparent px-3 py-2 font-medium text-sm text-teal-500 leading-6 focus-visible:ring focus-visible:ring-teal-400'>
				<span className='absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-15% from-white via-50% via-teal-500 to-85% to-white'></span>
				<a href={path}>{children}</a>
			</li>
		);
	}

	return (
		<li className='cursor-pointer gap-1 rounded-md px-3 py-2 font-medium text-sm text-zinc-800 leading-6 focus-within:ring focus-within:ring-teal-400 hover:text-teal-500'>
			<a href={path} className='outline-none'>
				{children}
			</a>
		</li>
	);
}

function Navbar() {
	return (
		<ul className='flex flex-row rounded-full border border-zinc-500/5 bg-white px-3 shadow-lg'>
			<NavbarItem path='#'>Home</NavbarItem>
			<NavbarItem path='#' active={true}>
				About
			</NavbarItem>
			<NavbarItem path='#'>Projects</NavbarItem>
			<NavbarItem path='#'>Uses</NavbarItem>
		</ul>
	);
}

export default function Home() {
	return (
		<main>
			<header className='flex h-18 items-center justify-between px-24 pt-6 pb-2'>
				<div className='size-5 opacity-0'></div>
				<Navbar />
				<div className='size-5 bg-blue-500'></div>
			</header>
		</main>
	);
}
