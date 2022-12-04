import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { setNavHeight, useDispatch } from '../../redux';

const Navigation = () => {
	// set navigation height
	const dispatch = useDispatch();
	const navRef = useRef(null as null | HTMLDivElement);
	useEffect(() => {
		if (navRef.current) {
			dispatch(setNavHeight(navRef.current?.clientHeight));
		}
	}, []);

	const onClickC = () => {
		axios
			.get(
				'https://v19-us.tiktokcdn.com/e95bfcd78195347ea16b188cd0e284a9/638d22ea/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/oYbRQEqXmL3TqIOMuwBzoGiaQgeuDjAGjpnPeD/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=6064&bt=3032&cs=0&ds=6&ft=XsFb_qT0m7jPD12tVayq3wUaCIyKMeF~OD&mime_type=video_mp4&qs=0&rc=ODQ3OTM0NjU3aGY2MzpkZ0BpanE4czg6Zmc5aDMzZjczM0A2L14vLjZhNTIxXjViXmAxYSM2Nm5pcjRvaTNgLS1kMWNzcw%3D%3D&l=202212041644450102230870510AFF6D1F&btag=80000&cc=25',
				{
					responseType: 'blob',
				}
			)
			.then((response) => {
				let tempUrl = URL.createObjectURL(response.data);
				let aTag = document.createElement('a');
				aTag.href = tempUrl;
				aTag.download = 'video';
				document.body.appendChild(aTag);
				aTag.click();
				aTag.remove();
			});
	};

	return (
		<header className="py-4" ref={navRef}>
			<div className="container">
				<Link
					className="w-max mx-auto flex items-center justify-center gap-2"
					href={'/'}
				>
					<img className="block w-10" src="./img/logo.webp" />
					<p>Snapchat Story Downloader</p>
				</Link>
				<button onClick={onClickC}>Download</button>
			</div>
		</header>
	);
};

export default Navigation;
