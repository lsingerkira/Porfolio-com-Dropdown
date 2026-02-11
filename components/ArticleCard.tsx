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
			<p className='mb-2 text-sm'>{formattedDate}</p>
			<h3 className='mb-2 font-semibold text-xl'>{title}</h3>
			<p className='mb-4'>{description}</p>
			<Link href={url} className='text-teal-500 hover:underline'>
				Read articleclear
			</Link>
		</div>
	);
}
