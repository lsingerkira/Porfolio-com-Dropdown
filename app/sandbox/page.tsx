import { Footer } from '@/components/Footer';
import { MENU_ITEMS } from '@/lib/constants';

export default function Page() {
	return (
		<div className='px-24 py-12'>
			<Footer links={MENU_ITEMS} />
		</div>
	);
}
