'use client';
import React from 'react';
import Link from 'next/link';

interface ArticleCardProps {
  date: string;
  title: string;
  description: string;
  url: string;
}
export default function ArticleCard({ date, title, description, url }: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="border border-zinc-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 max-w-2xl">
      <p className="text-sm text-zinc-500 mb-2">{formattedDate}</p>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-700 mb-4">{description}</p>
      <Link href={url} className="text-teal-500 hover:underline">
        Read article
      </Link>
    </div>
  );
}