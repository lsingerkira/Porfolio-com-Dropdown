'use client';

import { ArticleCard } from '@/components/ArticleCard';
import { Intro } from '@/components/Intro';
import { SignupWidget } from '@/components/SignUp';
import { SkillsWidget } from '@/components/SkillsWidget';
import { WorkWidget } from '@/components/WorkWidget';

export default function Page() {
	return (
		<div>
			<div>Intro</div>

			{/* ARTICLE CARDS FIRST */}
			<div className='flex flex-col gap-8 lg:flex-row lg:justify-between'>
				<div className='space-y-8 lg:flex-1'>
					<ArticleCard
						date='2023-12-25'
						title='Lorem ipsum dolor sit amet'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...'
						url='/articles/sample-article'
					/>
					<ArticleCard
						date='2023-12-25'
						title='Lorem ipsum dolor sit amet'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...'
						url='/articles/sample-article'
					/>
					<ArticleCard
						date='2024-06-01'
						title='Lorem ipsum dolor sit amet'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...'
						url='/articles/sample-article'
					/>
				</div>

				{/*  SIGNUP COLUMN  */}
				<div className='flex flex-col gap-6'>
					{/* SIGNUP WIDGET */}
					<SignupWidget
						title={'Stay up to date'}
						content={'Get notified when I publish something new, and unsubscribe at any time.'}
					/>

					{/* WORK WIDGET */}
					<WorkWidget
						title='Work Experience'
						content='A quick overview of my professional background.'
						experiences={[
							{
								logo: '/Slack.svg',
								organization: 'Slack',
								jobTitle: 'Software Engineerr',
								startYear: 2016,
								endYear: null,
							},
							{
								logo: '/Spotify.svg',
								organization: 'Spotify',
								jobTitle: 'Software Engineer',
								startYear: 2014,
								endYear: 2015,
							},
							{
								logo: '/Audible.svg',
								organization: 'Audible',
								jobTitle: 'Software Engineer',
								startYear: 2012,
								endYear: 2013,
							},
							{
								logo: '/Microsoft.svg',
								organization: 'Microsoft',
								jobTitle: 'Software Engineer',
								startYear: 2010,
								endYear: 2011,
							},
						]}
					/>

					{/*  SKILLS WIDGET */}
					<SkillsWidget
						title={'Skills'}
						content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
						skills={[
							{ icon: '/icons/html.svg', name: 'HTML', proficiency: 25 },
							{ icon: '/icons/css.svg', name: 'CSS', proficiency: 25 },
							{ icon: '/icons/js.svg', name: 'JavaScript', proficiency: 25 },
						]}
					/>
				</div>
			</div>
		</div>
	);
}
