import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<main className='mx-auto w-full max-w-[1280px] px-6 pt-12 pb-16 md:px-8 md:pt-16 lg:px-[144px]'>
			{/* Mobile: Photo on top */}
			<div className='mb-8 md:hidden'>
				<div className='relative aspect-[4/5] w-full overflow-hidden rounded-2xl'>
					<Image src='/profile.jpg' alt='Profile photo' fill className='object-cover' priority />
				</div>
			</div>

			{/* Two-column layout */}
			<div className='flex flex-col gap-10 md:flex-row md:gap-16'>
				{/* Left Column - Heading + Text */}
				<div className='flex-1'>
					<h1 className='mb-8 font-bold text-[2.5rem] text-foreground leading-[1.15] tracking-tight md:text-[2.75rem]'>
						I&apos;m Bob. I live in New York City, where I develop the future.
					</h1>

					<div className='space-y-6 text-base text-muted-foreground leading-7'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
							adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum
							dolor sit amet consectetur adipiscing elit Ut et massa mi..
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
							adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum
							dolor sit amet consectetur adipiscing elit Ut et massa mi..
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
							adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum
							dolor sit amet consectetur adipiscing elit Ut et massa mi..
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
							adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
						</p>
					</div>
				</div>

				{/* Right Column - Photo (desktop) + Social Links */}
				<div className='w-full flex-shrink-0 md:w-[380px]'>
					{/* Desktop Photo */}
					<div className='mb-8 hidden md:block'>
						<div className='relative aspect-[4/5] w-full overflow-hidden rounded-2xl'>
							<Image src='/profile.jpg' alt='Profile photo' fill className='object-cover' priority />
						</div>
					</div>

					{/* Social Links */}
					<div className='space-y-4'>
						<Link
							href='#'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<Image src='/X.svg' alt='X' width={20} height={20} className='dark:invert' />
							<span>Follow me on X</span>
						</Link>

						<Link
							href='#'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<Image src='/GitHub.svg' alt='GitHub' width={20} height={20} className='dark:invert' />
							<span>Follow me on Github</span>
						</Link>

						<Link
							href='#'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<Image src='/LinkedIn.svg' alt='LinkedIn' width={20} height={20} className='dark:invert' />
							<span>Follow me on LinkedIn</span>
						</Link>

						{/* Divider */}
						<div className='my-2 border-border border-t' />

						{/* Email */}
						<Link
							href='mailto:bob@email.com'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='h-5 w-5'
							>
								<rect width='20' height='16' x='2' y='4' rx='2' />
								<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
							</svg>
							<span>bob@email.com</span>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
