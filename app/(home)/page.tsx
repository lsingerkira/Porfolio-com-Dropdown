import { ArticleCard } from '@/components/ArticleCard';
import { SignupWidget } from '@/components/SignUp';

export default function Home() {
	return (
		<div>
			<div>Intro</div>
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
				</div>
			</div>
		</div>
	);
}
