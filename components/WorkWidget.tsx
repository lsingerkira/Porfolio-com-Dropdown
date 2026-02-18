'use client';

type Experience = {
	logo: string;
	organization: string;
	jobTitle: string;
	startYear: number;
	endYear?: number | null;
};

type WorkWidgetProps = {
	title: string;
	content: string;
	experiences?: Experience[];
};

export function WorkWidget({ title, content, experiences = [] }: WorkWidgetProps) {
	return (
		<section
			data-testid='workWidget'
			// Figma: Width 398px / Radius 16px / Border 1px / Padding 24px
			className='w-full rounded-2xl border border-zinc-100 bg-white p-6 text-zinc-900 sm:w-[398px] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100'
		>
			<h2
				data-testid='workWidgetTitle'
				className='mb-2 flex items-center gap-3 font-semibold text-lg text-zinc-900 leading-7 dark:text-zinc-100'
			>
				<img data-testid='workWidgetTitleIcon' src='/Vector.svg' alt='Work Icon' className='h-6 w-6 shrink-0' />
				{title}
			</h2>

			<p data-testid='workWidgetContent' className='mt-2 text-sm text-zinc-600 leading-6'>
				{content}
			</p>

			<ul className='flex w-full flex-col gap-4 pt-6'>
				{experiences.map((exp, index) => {
					const dates =
						exp.endYear === null || exp.endYear === undefined
							? `${exp.startYear} - Present`
							: `${exp.startYear} - ${exp.endYear}`;

					return (
						<li data-testid={`workWidgetItem${index}`} key={`${exp.organization}-${exp.startYear}-${index}`}>
							<div className='flex items-center gap-3'>
								<div className='flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-zinc-900/5 bg-white'>
									<img
										data-testid={`workWidgetItemLogo${index}`}
										src={exp.logo}
										alt={`${exp.organization} Logo`}
										className='h-6 w-6 object-contain'
									/>
								</div>

								<div className='min-w-0 flex-1'>
									<h3
										data-testid={`workWidgetItemTitle${index}`}
										className='truncate font-bold text-base text-zinc-900 dark:text-zinc-100'
									>
										{exp.organization}
									</h3>

									<div className='mt-1 flex items-center justify-between gap-3'>
										<p
											data-testid={`workWidgetItemContent${index}`}
											className='truncate text-xs text-zinc-500 uppercase tracking-wide'
										>
											{exp.jobTitle}
										</p>

										<span data-testid={`workWidgetItemDates${index}`} className='shrink-0 text-sm text-zinc-400'>
											{dates}
										</span>
									</div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
