'use client';
import PostListContainer from '@/components/post-mainpage/PostListContainer';
import { randomColorBy } from '@/utils/randomColor';
import React from 'react';
import usePosts from '@/hooks/usePosts';
import getAllTags from '@/utils/getAllTags';
import TagUi from '@/components/ui/TagUi';

type Props = {
	params: {
		slug: string;
	};
};

export default function TagsPage({ params: { slug } }: Props) {
	const { posts } = usePosts();
	const allTags = Object.keys(getAllTags(posts));
	const filteredPosts = posts?.filter(post => post.tags.includes(slug));

	return (
		<>
			<section className="flex w-full p-12 shadow-lg justify-between items-center ">
				<div>
					<h3 className="capitalize text-3xl font-bold">
						<span className={`${randomColorBy(slug).text}`}>#</span>
						{slug}
					</h3>
					<span className="flex text-gray-500">
						{filteredPosts?.length}
						<hr
							style={{
								color: '#FF4B60',
								backgroundColor: '#FF4B60',
								width: 8,
								height: 3,
								margin: 'auto 10px',
							}}
						/>
						Articles
					</span>
				</div>
				<TagUi tags={allTags} />
			</section>
			{filteredPosts && (
				<PostListContainer posts={filteredPosts} size="small" />
			)}
		</>
	);
}
