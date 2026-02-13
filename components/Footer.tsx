import Link from 'next/link';

import { NAME } from '@/lib/constants';
import type { MenuItem } from '@/lib/types';

type FooterProps = {
	links: MenuItem[];
};

export function Footer(props: FooterProps) {
	const { links } = props;
	const currentYear = new Date().getFullYear();

	return (
		<footer className='flex flex-col items-center gap-3 border-zinc-200 border-t px-8 pt-10 pb-16 text-zinc-900 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:text-zinc-100'>
			<nav className='flex gap-6'>
				{links.map((link) => (
					<Link
						key={link.path}
						href={link.path}
						className='text-base transition-colors hover:text-zinc-800 dark:hover:text-zinc-200'
					>
						{link.title}
					</Link>
				))}
			</nav>

			<p className='text-center text-sm text-zinc-400'>
				© {currentYear} {NAME}. All rights reserved.
			</p>
		</footer>
	);
}
