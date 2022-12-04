import axios from 'axios';
import React, { useRef, useState } from 'react';
import { setVidoes, useDispatch } from '../../redux';

const SearchInput = () => {
	const [error, setError] = useState<null | string>(null);
	const [isLoading, setLoading] = useState<boolean>(false);
	const [videos, setvideos] = useState<any>(null);
	const inputRef = useRef<any>();
	const btnRef = useRef<any>();

	// get user post
	const dispatch = useDispatch();
	const getUserPost = (value: string) => {
		const options = {
			method: 'GET',
			url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/user/posts',
			params: {
				unique_id: value,
			},
			headers: {
				'X-RapidAPI-Key': '40144bbb81msh2a9340dd989447ap168327jsn5650256e8df2',
				'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then(function (response) {
				dispatch(
					setVidoes({ title: 'User Video', videos: response.data.vidoes })
				);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	// clear error
	const onClickInput = () => {
		setError(null);
	};

	// onclick search button
	const onSearch = () => {
		setLoading(true);
		if (inputRef.current.value) {
			const searchValue: any = inputRef.current.value;
			getUserPost(searchValue);
			setLoading(false);
		} else {
			setError('search field is required.');
			setLoading(false);
		}
	};

	return (
		<div className="pt-32 pb-4">
			<div className="container">
				<h2 className="text-lg font-bold text-center mb-4">
					Enter Snapchat Username/URL
				</h2>
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center">
					<input
						ref={inputRef}
						onClick={onClickInput}
						className="max-w-sm w-full py-2 px-4 outline-0 rounded-md text-gray-700"
						placeholder="Type username or past url"
					/>
					<button
						onClick={onSearch}
						className="inline-block rounded bg-yellow-300 px-6 py-2 uppercase text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-lg cursor-pointer disabled:opacity-75 disabled:cursor-progress"
						disabled={isLoading}
					>
						{isLoading ? 'loading...' : 'SEARCH'}
					</button>
				</div>
				<p
					className={`text-red-500 mt-2 transition duration-150 ease-in-out ${
						!error ? 'opacity-0' : 'opacity-1'
					}`}
				>
					error: {error}
				</p>
			</div>
		</div>
	);
};

export default SearchInput;
