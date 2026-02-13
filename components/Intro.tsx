'use client';

type IntroProps = {
	logo: string;
	name: string;
	content: string;
};

export function Intro(props: IntroProps) {
	const { logo, name, content } = props;

	return (
		<div
			data-testid='intro'
			className='flex w-full max-w-[420px] flex-col gap-3 rounded-[6px] border border-[#e0e0e0] bg-white p-6 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]'
		>
			<div>
				<img
					data-testid='introLogo'
					src={logo}
					alt={`${name} Logo`}
					className='h-16 w-16 rounded-full border-2 border-[#e0e0e0] p-1'
				/>

				<h2 data-testid='introName' className='mt-2 font-bold text-2xl text-[#333]'>
					{name}
				</h2>
			</div>

			<div>
				<p data-testid='introContent' className='line-clamp-3 overflow-hidden text-ellipsis text-[#777] text-base'>
					{content}
				</p>
			</div>
		</div>
	);
}

export default Intro;
