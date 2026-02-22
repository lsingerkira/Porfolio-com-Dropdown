'use client';

type Skill = {
	icon: string;
	name: string;
	proficiency: number;
};

type SkillsWidgetProps = {
	title: string;
	content: string;
	skills?: Skill[];
};

function getProficiencyWidthClass(proficiency: number) {
	const clamped = Math.max(0, Math.min(100, proficiency));

	if (clamped >= 100) return 'w-full';
	if (clamped >= 90) return 'w-[90%]';
	if (clamped >= 80) return 'w-4/5';
	if (clamped >= 70) return 'w-[70%]';
	if (clamped >= 60) return 'w-3/5';
	if (clamped >= 50) return 'w-1/2';
	if (clamped >= 40) return 'w-2/5';
	if (clamped >= 30) return 'w-[30%]';
	if (clamped >= 20) return 'w-1/5';
	if (clamped >= 10) return 'w-[10%]';

	return 'w-[2%]';
}

export function SkillsWidget({ title, content, skills = [] }: SkillsWidgetProps) {
	return (
		<section
			data-testid='skillsWidget'
			className='w-full rounded-2xl border border-zinc-100 bg-white p-6 text-zinc-900 shadow-sm sm:w-99.5 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100'
		>
			<h2
				data-testid='skillsWidgetTitle'
				className='wrap-break-word font-semibold text-lg text-zinc-900 leading-7 dark:text-zinc-100'
			>
				{title}
			</h2>

			<p data-testid='skillsWidgetContent' className='wrap-break-word mt-2 text-sm text-zinc-600 leading-6 dark:text-zinc-400'>
				{content}
			</p>

			<ul className='flex w-full flex-col gap-4 pt-6'>
				{skills.map((item, index) => (
					<li data-testid={`skillsWidgetItem${index}`} key={`${item.name}-${index}`}>
						<div className='flex items-center gap-3'>
							<img src={item.icon} alt={`${item.name} icon`} className='h-12 w-12 rounded' />

							<div className='flex min-w-0 flex-1 flex-col gap-2'>
								<h3
									data-testid={`skillsWidgetItemTitle${index}`}
									className='wrap-break-word font-bold text-base text-zinc-900 dark:text-zinc-100'
								>
									{item.name}
								</h3>

								<div className='h-2.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-700'>
									<div
										data-testid={`skillsWidgetItemBar${index}`}
										className={`h-full rounded-full bg-teal-500 transition-all duration-500 ${getProficiencyWidthClass(item.proficiency)}`}
									></div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
