interface UsesItemProps {
	title: string;
	description: string;
}

export default function UsesItem({ title, description }: UsesItemProps) {
	return (
		<div>
			<h3 className='mb-2 font-bold text-foreground'>{title}</h3>
			<p className='text-zinc-600 leading-relaxed dark:text-zinc-400'>{description}</p>
		</div>
	);
}
