'use client';
import Link from 'next/link';

interface ArticleCardProps {
	date: string;
	title: string;
	description: string;
	url: string;
}
export function ArticleCard({ date, title, description, url }: ArticleCardProps) {
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div className='max-w-2xl rounded-lg p-6 transition-shadow duration-300 hover:shadow-lg'>
			<p className='mb-2 text-sm text-zinc-500 dark:text-zinc-400'>{formattedDate}</p>
			<h3 className='mb-2 font-semibold text-xl text-zinc-900 dark:text-zinc-100'>{title}</h3>
			<p className='mb-4 text-zinc-600 dark:text-zinc-400'>{description}</p>
			<Link href={url} className='text-teal-500 hover:underline'>
				Read article
			</Link>
		</div>
	);
}
