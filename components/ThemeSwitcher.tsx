'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark';

export function ThemeSwitcher() {
	const [theme, setTheme] = useState<Theme>('light');
	const btnRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		const saved = localStorage.getItem('theme') as Theme | null;

		const initial = saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

		setTheme(initial);
		document.documentElement.classList.toggle('dark', initial === 'dark');
		console.log('[ThemeSwitcher] initial:', initial, 'html.class:', document.documentElement.className);

		if (btnRef.current) {
			const bg = window.getComputedStyle(btnRef.current).backgroundColor;
			console.log('[ThemeSwitcher] button computed background:', bg);
		}
	}, []);

	const toggleTheme = () => {
		const next = theme === 'light' ? 'dark' : 'light';

		setTheme(next);
		localStorage.setItem('theme', next);
		document.documentElement.classList.toggle('dark', next === 'dark');
		console.log('[ThemeSwitcher] toggled to:', next, 'html.class:', document.documentElement.className);

		if (btnRef.current) {
			const bg = window.getComputedStyle(btnRef.current).backgroundColor;
			console.log('[ThemeSwitcher] button computed background after toggle:', bg);
		}
	};

	return (
		<button
			ref={btnRef}
			onClick={toggleTheme}
			aria-label='Toggle theme'
			className={`flex size-9 items-center justify-center rounded-full border shadow transition hover:scale-105 ${theme === 'light' ? 'border-zinc-200 bg-white' : 'border-zinc-700 bg-zinc-900'}`}
		>
			{theme === 'light' ? (
				<Image src='/sun.svg' alt='Light mode' width={18} height={18} />
			) : (
				<Image src='/moon.svg' alt='Dark mode' width={18} height={18} />
			)}
		</button>
	);
}
