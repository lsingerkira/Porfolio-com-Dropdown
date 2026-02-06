import Link from 'next/link';
import type React from 'react';

import ArticleCard from '@/components/Footer/ArticleCard';
import Footer from '@/components/Footer/Footer';
import SignupWidget from '@/components/SignUp/SignUp';

import ThemeSwitcher from './components/themeSwitcher/themeSwitcher';

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

function Navbar() {
	return (
		<ul className='flex items-center gap-1 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-foreground shadow-black/30 shadow-md backdrop-blur-md'>
			<NavbarItem path='#'>Home</NavbarItem>
			<NavbarItem path='#' active={true}>
				About
			</NavbarItem>
			<NavbarItem path='/projects'>Projects</NavbarItem>
			<NavbarItem path='/uses'>Uses</NavbarItem>
		</ul>
	);
}

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<header className='flex h-18 items-center justify-between px-24 pt-6 pb-2'>
				<div className='size-5 opacity-0'></div>
				<Navbar />
				<ThemeSwitcher />
			</header>
			<div className='flex-1 px-24 py-12'>
				<ArticleCard
					date='2023-12-25'
					title='Lorem ipsum dolor sit amet'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...'
					url='/articles/sample-article'
				/>
			</div>
			<div className='flex-1 px-24 py-12'>
				<SignupWidget
					title={'Stay up to date'}
					content={'Get notified when I publish something new, and unsubscribe at any time.'}
				/>
			</div>
			<div className='flex-1 px-24 py-12'>
				<ArticleCard
					date='2024-06-01'
					title='Lorem ipsum dolor sit amet'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...'
					url='/articles/sample-article'
				/>
			</div>
			<div className='flex-1 px-24 py-12'>
				<ArticleCard
					date='2024-06-01'
					title='Lorem ipsum dolor sit amet'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...'
					url='/articles/sample-article'
				/>
			</div>
			<Footer
				links={[
					{ title: 'Home', url: '/' },
					{ title: 'About', url: '/about' },
					{ title: 'Projects', url: '/projects' },
					{ title: 'Uses', url: '/uses' },
				]}
			/>
		</main>
	);
}
