import { ArticleCard } from '@/components/ArticleCard';
import { Intro } from '@/components/Intro';
import { SignupWidget } from '@/components/SignUp';
import { SkillsWidget } from '@/components/SkillsWidget';

export default function Home() {
	return (
		<div>
			<Intro />
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
				<div className=''>
					<SignupWidget
						title={'Stay up to date'}
						content={'Get notified when I publish something new, and unsubscribe at any time.'}
					/>
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
