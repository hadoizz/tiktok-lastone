import React, { useEffect } from 'react';
import { RootState, useSelector } from '../../redux';
import { Video } from '../index';

const Feed = () => {
	const siteState = useSelector((state: RootState) => state.site);
	console.log(siteState.videos);
	return (
		<div className="py-4">
			<div className="container">
				<div className="grid grid-cols-1 gap-4 sm:mt-4">
					{siteState.videos?.map((item: any, i: number) => (
						<Video key={i} videoData={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Feed;
