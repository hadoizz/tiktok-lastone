import React, { useEffect } from 'react';
import { RootState, useSelector } from '../../redux';
import { Video } from '../index';

const Feed = ({ title }: { title: string }) => {
	const siteState = useSelector((state: RootState) => state.site);

	return (
		<div className="py-4">
			<div className="container">
				{siteState.feedTitle && (
					<h2 className="text-2xl">{siteState.feedTitle}</h2>
				)}
				<div className="grid grid-cols-1 gap-4 mt-4">
					{siteState.videos?.map((item: any, i: number) => (
						<Video key={i} videoData={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Feed;
