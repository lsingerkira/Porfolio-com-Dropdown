import type { ReactNode } from 'react';

interface UsesSectionProps {
	title: string;
	children: ReactNode;
}

export default function UsesSection({ title, children }: UsesSectionProps) {
	return (
		<div className='border-zinc-100 border-l pl-8 dark:border-zinc-700/40'>
			<div className='grid grid-cols-1 gap-12 md:grid-cols-4'>
				{/* Section Title */}
				<h2 className='font-bold text-foreground text-sm'>{title}</h2>

				{/* Section Content */}
				<div className='space-y-12 md:col-span-3'>{children}</div>
			</div>
		</div>
	);
}
