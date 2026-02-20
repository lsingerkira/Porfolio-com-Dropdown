import UsesItem from '@/components/UsesItem';
import UsesSection from '@/components/UsesSection';

export default function Uses() {
	return (
		<main className='min-h-screen px-6 py-16 md:px-24'>
			<div className='mx-auto max-w-6xl'>
				{/* Intro */}
				<section className='flex max-w-[672px] flex-col gap-6'>
					<h1 className='font-bold text-5xl text-foreground leading-tight tracking-tight'>
						Software I use, gadgets I love, and other things I recommend.
					</h1>

					<p className='text-lg text-zinc-600 leading-relaxed dark:text-zinc-400'>
						Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
						adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum
						dolor sit amet consectetur adipiscing elit Ut et massa mi..
					</p>
				</section>

				{/* Content */}
				<section className='mt-20 space-y-20'>
					{/* Workstation */}
					<UsesSection title='Workstation'>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
					</UsesSection>

					{/* Development tools */}
					<UsesSection title='Development tools'>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
					</UsesSection>

					{/* Design */}
					<UsesSection title='Design'>
						<UsesItem
							title='Whimsical'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Figma'
							description='We initially adopted Figma primarily as a design tool, but it has evolved into our virtual whiteboard that serves the entire company. The unexpected allure turned out to be the powerful collaboration features it offers.'
						/>
					</UsesSection>

					{/* Productivity */}
					<UsesSection title='Productivity'>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
						<UsesItem
							title='Item Name'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.'
						/>
					</UsesSection>
				</section>
			</div>
		</main>
	);
}
