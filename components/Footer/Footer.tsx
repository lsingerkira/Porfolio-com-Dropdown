import type React from 'react';

type FooterProps = {
	links?: { title: string; url: string }[];
};

export default function Footer(props: FooterProps) {
	return (
		<footer className='border-zinc-500/5 border-t bg-white py-8'>
			<div className='mx-auto px-24'>{/* Your footer content */}</div>
		</footer>
	);
}
