import React from 'react';
import AboutMe from './AboutMe';
import FollowMe from './FollowMe';
import LatestArticles from './LatestArticles';
import TagCloud from './TagCloud';

export default function RightSection({ grid }: { grid?: string }) {
	return (
		<section className={`hidden lg:block pr-0 lg:content-start ${grid}`}>
			<LatestArticles />
			<TagCloud style="text-s" />
			<FollowMe />
		</section>
	);
}
