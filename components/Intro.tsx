'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Intro() {
	return (
		<section className='flex max-w-2xl flex-col gap-6 p-6'>
			{/* Profile image */}
			<div>
				<Image
					src='/profile.jpg' // replace with your image path
					alt='Profile picture'
					width={56}
					height={56}
					className='rounded-full'
				/>
			</div>

			{/* Heading */}
			<h1 className='font-bold text-5xl leading-tight'>Software engineer, father, and believer</h1>

			{/* Description */}
			<p className='text-base text-gray-600 leading-relaxed dark:text-zinc-400'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Ut et massa mi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi.
			</p>

			{/* Social links */}
			<div className='flex gap-4 text-gray-600'>
				<Link href='#' className='hover:opacity-70'>
					<Image src='/X.svg' alt='X (Twitter)' width={24} height={24} />
				</Link>
				<Link href='#' className='hover:opacity-70'>
					<Image src='/GitHub.svg' alt='GitHub' width={24} height={24} />
				</Link>
				<Link href='#' className='hover:opacity-70'>
					<Image src='/LinkedIn.svg' alt='LinkedIn' width={24} height={24} />
				</Link>
			</div>
		</section>
	);
}
