import ArticleCard from '@/components/Footer/ArticleCard';
import Footer from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar';
import SignupWidget from '@/components/SignUp/SignUp';
import { MENU_ITEMS } from '@/lib/types';

import ThemeSwitcher from './components/themeSwitcher/themeSwitcher';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<header className='flex h-18 items-center justify-between px-24 pt-6 pb-2'>
				<div className='size-5 opacity-0'></div>
				<Navbar
					links={[
						{ title: 'Home', url: '/' },
						{ title: 'About', url: '/about' },
						{ title: 'Projects', url: '/projects' },
						{ title: 'Uses', url: '/uses' },
					]}
				/>
				<ThemeSwitcher />
			</header>
			<div className='flex-1 px-24 py-12'>
				<ArticleCard
					date='2023-12-25'
					title='Lorem ipsum dolor sit amet'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...'
					url='/articles/sample-article'
				/>
			</div>
			<div className='flex-1 px-24 py-12'>
				<SignupWidget
					title={'Stay up to date'}
					content={'Get notified when I publish something new, and unsubscribe at any time.'}
				/>
			</div>
			<div className='flex-1 px-24 py-12'>
				<ArticleCard
					date='2024-06-01'
					title='Lorem ipsum dolor sit amet'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...'
					url='/articles/sample-article'
				/>
			</div>
			<div className='flex-1 px-24 py-12'>
				<ArticleCard
					date='2024-06-01'
					title='Lorem ipsum dolor sit amet'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...'
					url='/articles/sample-article'
				/>
			</div>
		</main>
	);
}
