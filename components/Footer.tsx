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
		<footer className='flex items-center justify-between px-36 pt-10 pb-16'>
			<nav className='flex gap-6'>
				{links.map((link) => (
					<Link key={link.path} href={link.path} className='text-base transition-colors hover:text-zinc-800'>
						{link.title}
					</Link>
				))}
			</nav>
			<p className='text-sm text-zinc-400'>
				© {currentYear} {NAME}. All rights reserved.
			</p>
		</footer>
	);
}

Footer.displayName = 'Footer';
