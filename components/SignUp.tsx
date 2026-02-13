'use client';

import { useState } from 'react';

type SignupWidgetProps = {
	title: string;
	content: string;
	simulateNetworkRequestTime?: number;
};

export function SignupWidget({ title, content, simulateNetworkRequestTime = 2000 }: SignupWidgetProps) {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [busy, setBusy] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			setBusy(true);
			await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
			setMessage(`Thanks for subscribing, ${email}!`);
			setIsSubscribed(true);
		} finally {
			setBusy(false);
		}
	}

	return (
		<form
			data-testid={'signupWidget'}
			onSubmit={handleSubmit}
			autoComplete={'off'}
			className='w-full rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm sm:w-[398px] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100'
		>
			<h2 data-testid='signupWidgetTitle' className='mb-2 flex items-center gap-3 font-semibold text-lg'>
				<img data-testid='signupWidgetTitleIcon' src='/Vectormail.svg' alt='Mail Icon' className='h-6 w-6 shrink-0' />
				{title}
			</h2>

			{isSubscribed && (
				<div
					data-testid={'signupWidgetMessage'}
					className='mb-4 rounded border border-emerald-100 bg-emerald-50 p-3 text-emerald-800'
				>
					{message}
				</div>
			)}

			{!isSubscribed && (
				<>
					<p data-testid={'signupWidgetContent'} className='mb-4 text-sm text-zinc-600'>
						{content}
					</p>

					<div className='flex items-center gap-3'>
						<label htmlFor='signup-email' className='sr-only'>
							Email address
						</label>
						<input
							id='signup-email'
							data-testid={'signupWidgetInput'}
							type='email'
							required
							value={email}
							disabled={busy}
							onChange={(e) => setEmail(e.target.value)}
							className='flex-1 rounded-md border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-zinc-700'
							placeholder='Email address'
						/>

						<button
							data-testid={'signupWidgetButton'}
							type='submit'
							disabled={busy}
							className='rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60'
						>
							{busy ? 'Joining...' : 'Join'}
						</button>
					</div>
				</>
			)}
		</form>
	);
}
