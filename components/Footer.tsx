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
		<footer className='w-full border-zinc-200 border-t px-8 pt-10 pb-16'>
			<div className='flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between'>
				<nav className='flex flex-wrap justify-center gap-6 sm:justify-start'>
					{links.map((link) => (
						<Link key={link.path} href={link.path} className='text-base transition-colors hover:text-zinc-800'>
							{link.title}
						</Link>
					))}
				</nav>

				<p className='text-center text-sm text-zinc-400 sm:text-right'>
					© {currentYear} {NAME}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

Footer.displayName = 'Footer';
