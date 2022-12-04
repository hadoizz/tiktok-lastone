import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface siteState {
	navHeight?: number;
	footerHeight?: number;
	feedTitle?: any;
	videos?: any;
}

const initialState: siteState = {
	navHeight: 0,
	footerHeight: 0,
	feedTitle: 'Vidoes',
	videos: [
		{
			aweme_id: 'v0f044gc0000ce5sn1rc77u611u1silg',
			video_id: '7173053218275052827',
			region: 'BD',
			title:
				'who is the boos❤️#foryoupage #viral #trending #foryou #ctgtiktok #tiktok #video #bdtiktokofficial #arzintina #attuitude #messi #foysalahmmed07',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/81cd075c78bd418f9367290963be2546_1670106649?x-expires=1670227200&x-signature=9jpCojFpIaKdh2RUeswnNhEGCyM%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/001fca13e33f4eaea413e9140f35a948_1670106649~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=qDkNKTmQtllbJUJ2TcDfC4r5Q%2F8%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 25,
			play: 'https://v19-us.tiktokcdn.com/480a711b89df379d51be3d576ab43e87/638cac4c/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/owP8iWxRlQEgEnPDDj8QeunMeHbgABDK0oUXph/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3376&bt=1688&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=aDw7ZTo2ZWQzN2c5Nzk5OkBpamw0NDk6ZjR2aDMzZjczM0BfMy41LjQuNjExYy0yY2BeYSNpcHIucjRvazJgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/e929201943b94170e852992d22dec08d/638cac4c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oA9SEFLDRPPbeu2rzQQ8AUgiIAEjgMnYIHiDeB/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3494&bt=1747&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=OjplOzQ8PDc8aGQ6aTZlZkBpamw0NDk6ZjR2aDMzZjczM0AxNF4tXmIuNmExNC0vLzItYSNpcHIucjRvazJgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7173053365717994266.mp3',
			music_info: {
				id: '7173053337678383899',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7173053365717994266.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 25,
				album: '',
			},
			play_count: 6277,
			digg_count: 1551,
			comment_count: 25,
			share_count: 6,
			download_count: 9,
			create_time: 1670106641,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ce5jgvbc77u9br7im0r0',
			video_id: '7172889769226030362',
			region: 'BD',
			title:
				'Dear ex this is for you🎶#foryou #trending #viral #foryoupage #tiktok #funny #comedy #bdtiktokofficial #video #ctgtiktok #singing #broken #foysalahmmed07',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/80f53782aabd457286002c126e85a907_1670068555?x-expires=1670227200&x-signature=%2FRhBcdMrNcyESXrQF4ocSjZWMRk%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/616434fc5bc947d2a5d809ec7805d337_1670068554~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=cNvJdceLcS1116AG2wn7DLzcirQ%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 21,
			play: 'https://v19-us.tiktokcdn.com/d5733cdee7d2cb44f7065c6d82bbb0af/638cac48/video/tos/useast2a/tos-useast2a-pve-0037-aiso/okhinbS9EDcPopcBvgjQeBZWQtRzAwWscDfE5W/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=1826&bt=913&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=aGY2ZDkzaTVkNTlmNWZlZ0BpMzNsdTw6ZnltaDMzZjczM0AtXjJjYGM2Xy8xLzEzNi1fYSNvajRfcjRfZDJgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/d8970f6c63c5f2aefd8fc6bca27f8fa4/638cac48/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/oQmRzhQ8IXjQrvEXUBLdAPfCsi2pODtzJMAXhe/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=1890&bt=945&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=ZTo5ZTtmNWVoODg3NTc4aUBpMzNsdTw6ZnltaDMzZjczM0BgNi02LjY0XjYxYl5iYV5fYSNvajRfcjRfZDJgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7172889802885352219.mp3',
			music_info: {
				id: '7172889799160924955',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7172889802885352219.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 21,
				album: '',
			},
			play_count: 4140,
			digg_count: 923,
			comment_count: 28,
			share_count: 3,
			download_count: 12,
			create_time: 1670068546,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ce4us2bc77ufrpb1hu80',
			video_id: '7172526982792613146',
			region: 'BD',
			title:
				'শিতের বীরপুরুষ 🤧😂#foryoupage #viral #trending #foryou #video #ctgtiktok #comedy #funny #tiktok #bdtiktokofficial #foysalahmmed07',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/b45a0d746c244f99ae9d02f18cc82e0b_1669984079?x-expires=1670227200&x-signature=g%2FNiwah9GdibLsQFnzFr%2Bcl4uQQ%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/dfedc45090f44429873a26d2f620e679_1669984079~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=3LL%2F7Qo9BP78pg%2FOep6gnNqln%2Bw%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 18,
			play: 'https://v19-us.tiktokcdn.com/56bdedc0d68c8ac8093721ba898d5311/638cac45/video/tos/useast2a/tos-useast2a-pve-0037-aiso/osvKQbEHGgHobejgLD31bg8AJJvnE8f4eex7wI/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=5004&bt=2502&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=aTxnaDtkZmRoOzdnPDlmZUBpM3g0c2k6ZjV4aDMzZjczM0BgM2NjL18tXjIxLjReNjEwYSM1ZV9vcjRfcDFgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/7dbca338fa9ff59128b823527501f3fa/638cac45/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/ogyDw7x6IvfIe5EEeJVnbGQj4JA8QpegFMsHUK/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=5086&bt=2543&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=ODs3ZTs8NGdlaDQ5ZDM2OkBpM3g0c2k6ZjV4aDMzZjczM0AxMjFeMDFiNi4xMV4yNTE0YSM1ZV9vcjRfcDFgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7172527008101714715.mp3',
			music_info: {
				id: '7172527000392469275',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7172527008101714715.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 18,
				album: '',
			},
			play_count: 1586817,
			digg_count: 72661,
			comment_count: 1151,
			share_count: 857,
			download_count: 5855,
			create_time: 1669984078,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ce44r3jc77u3sqe0npp0',
			video_id: '7172068946940546330',
			region: 'BD',
			title:
				'২ টা ⚽ ⚽#trending #foryou #viral #foryoupage #tiktok #ctgtiktok #video #bdtiktokofficial #attuitude #messi #arzintina #foysalahmmed07',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/c716af64609e44ff94146b49c5d47126_1669877437?x-expires=1670227200&x-signature=GKxdtuiPvFlFaRVG1Y%2BU3nBzfDw%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/7348ec420a344218ac88a0b566557823_1669877437~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=yaBA%2BzIN4FygrXdZPS64fFtVwJo%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 23,
			play: 'https://v19-us.tiktokcdn.com/251d0f5a769eef7cfef24681135b31ee/638cac4a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/osIL5D2CIU5AsnKNDWIQpwzx99yfhhHCAoNbTx/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2760&bt=1380&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=Nzg8NDk2Njc0ZWZpO2c6OEBpM3MzdDY6ZjY3aDMzZjczM0BiMTRhXjAyXmExMjAxNl41YSNta2JwcjRnbzFgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/b4474b12577c8c8bff2980cf9ef559cc/638cac4a/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/o0FwTCU5zUqsyIDbALfQnrIH5ANCxEhIhIopCx/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2850&bt=1425&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=ZWU1ODxmODVpZjY2NmdpNkBpM3MzdDY6ZjY3aDMzZjczM0AzNDNgMF4vNjUxYzBhNGBiYSNta2JwcjRnbzFgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7172069105204235035.mp3',
			music_info: {
				id: '7172069065753299739',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7172069105204235035.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 23,
				album: '',
			},
			play_count: 44917,
			digg_count: 9770,
			comment_count: 134,
			share_count: 64,
			download_count: 205,
			create_time: 1669877434,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ce3jdjjc77ucc2ua0uh0',
			video_id: '7171761557439794459',
			region: 'BD',
			title:
				'🤭🤭🤭🤭🤭#foryoupage #viral #trending #foryou #tiktok #funny #comedy #ctgtiktok #singing #bdtiktokofficial #foysalahmmed07',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/2d1b942d0c5d4d7e8701ac8a86fc4130_1669805866?x-expires=1670227200&x-signature=6GJkhz0KW71XklMOzuLzAlQAfF0%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/8c444d4216e94f25938ace1b50737bb1_1669805866~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=bTz7e0esrkVddRT0d9mDpRe9Z9g%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 8,
			play: 'https://v19-us.tiktokcdn.com/839c9bc77484f60ff04d32965b6fa78c/638cac3b/video/tos/useast2a/tos-useast2a-pve-0037-aiso/o8yEibzHAQ7Rn8BUQlYDAOBPNDheIlFXjebw9G/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3746&bt=1873&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=ZTk1aTUzMzpnNjxlNTM8ZkBpM3hkNWY6Zm1taDMzZjczM0A1Y15hLV80Xy0xNS5jNjExYSNlLXJgcjRnYTBgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/8eaacb032e0685e1fe27fbff4ace3c2d/638cac3b/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/oo3ObYgEQD9l6iDDzNjEHnyBhoaXPAfbQAwemR/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3822&bt=1911&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=Njk4Zjw0NGZkaTs1ODplNkBpM3hkNWY6Zm1taDMzZjczM0BiM15gMzRiX2AxMy00MDU0YSNlLXJgcjRnYTBgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7171761581271960347.mp3',
			music_info: {
				id: '7171761563165133595',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7171761581271960347.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 8,
				album: '',
			},
			play_count: 69377,
			digg_count: 8285,
			comment_count: 136,
			share_count: 68,
			download_count: 214,
			create_time: 1669805865,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ce31pgbc77u612eth6u0',
			video_id: '7171451941229432090',
			region: 'BD',
			title:
				'কার কার সমস্যা 🤧🤧#trending #foryou #viral #foryoupage #comedy #tiktok #video #funny #bdtiktokofficial #winter #tiktok #foysalahmmed07 #broken',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/ac036b19b545485da05ceacfb7b882e4_1669733783?x-expires=1670227200&x-signature=tCAR51qWqh9zax5WqWNkRg78S%2Bk%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/d7a9127889404cf5a1b4e06e6a1a8d1c_1669733787~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=lfMmYDIP6uvIAY1jwcbtx2td%2FLc%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 15,
			play: 'https://v19-us.tiktokcdn.com/27bf98ff8d76f5461e4d0a10d5d146bf/638cac42/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/osJZGAYGwnQ03hUxWwfthAoJmHQT58ICIDzGCg/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3400&bt=1700&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=Njo4ZDc4O2dnNmg1aWc4O0BpMzl3NTk6Zmo0aDMzZjczM0AwMjExLjJhNjQxXzUwLTIzYSNyZWIucjRfbTBgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/697844656c8717af4ca8b99ed6d05c8f/638cac42/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/oYuwnIgUz3p5wAHmohtZAxQZYfCJDxhCiG8IwG/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3504&bt=1752&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=ZTY3OjpkMzhlNzM5OGZoOEBpMzl3NTk6Zmo0aDMzZjczM0AuNjVjYzMvNTIxNWEyL2IxYSNyZWIucjRfbTBgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7171452001032325915.mp3',
			music_info: {
				id: '7171451981912066843',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7171452001032325915.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 15,
				album: '',
			},
			play_count: 16130,
			digg_count: 2977,
			comment_count: 57,
			share_count: 17,
			download_count: 56,
			create_time: 1669733777,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ce2fskbc77u2enoim440',
			video_id: '7171137409931824411',
			region: 'BD',
			title:
				'Congestion Brazil #foryou #trending #viral #foryoupage #tiktok #bdtiktokofficial #funny #video #comedy #tiktok #foysalahmmed07 #Brazil',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/28dc25953ab2435eb66a978699f2f7dd_1669660562?x-expires=1670227200&x-signature=QUrg5xomhv4rytp8t7r1Ns0bdbg%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/a18c2e7f2dd645ce83b46b72a8a1bab2_1669660562~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=JARctISTrL%2FZkLc7jWaUAE%2B4jfM%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 12,
			play: 'https://v19-us.tiktokcdn.com/de9f71e5210429254f301d6bdcca0712/638cac3f/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/ok5hnbJRED0Po5fI1gjQ8BeJQdRPAcWQEDSDJ8/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2292&bt=1146&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=ZjQ6ODZpOGdmM2hmNDw0aEBpMzdscTU6Zm5paDMzZjczM0BiLjQvLi02NjIxNGIuNDM0YSMxamxicjRfcC9gLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/8d523dea0e4d06d4bd95bbfc72e94a1c/638cac3f/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oIQnJjWE7BPD5QReJJoAs8DD5fnkIhgZ1bQR5P/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2412&bt=1206&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=OmU1Mzo1ZDU1ZjpkZGdmOUBpMzdscTU6Zm5paDMzZjczM0A0YmJfYTUuNjUxLjUtXy4zYSMxamxicjRfcC9gLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7171137482132720411.mp3',
			music_info: {
				id: '7171137444958456603',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7171137482132720411.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 12,
				album: '',
			},
			play_count: 24134,
			digg_count: 4267,
			comment_count: 112,
			share_count: 51,
			download_count: 122,
			create_time: 1669660560,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ce2cjmjc77u04u47ej80',
			video_id: '7171079557666049306',
			region: 'BD',
			title:
				'কে কে করেন 🤣🤣😂#trending #foryou #viral #foryoupage #video #ctgtiktok #comedy #funny #tiktok #bdtiktokofficial #foysalahmmed07 #winter',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/120708a250c04a098930e314c06ce8f5_1669647078?x-expires=1670227200&x-signature=uTbixED3hNMU3yjesx1BBY701FA%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/bd36b444ee9d4bd2ab452f074834304d_1669647077~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=ufnZvA5gHU7oqYqzWrph8ibof%2Bg%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 16,
			play: 'https://v19-us.tiktokcdn.com/79ff51e4326009c76fd6c263de2d8132/638cac43/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/ooQIAwhyhEJCwEnuC4Tty3oIzNA8fhQT3AoxmU/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=4620&bt=2310&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=NGhkZDs5NWQ3Nmc7ZTk8Z0BpM206eDM6ZnBmaDMzZjczM0BgYTVeYl8yXjAxMTJgNjFjYSM1YjExcjRnZy9gLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/677f20006c63a3f98d802a94c1820d77/638cac43/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/okAzhCuxnhtQEItUTQENAfywSzO6JmIATQ3h4o/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=4784&bt=2392&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=M2hnZmc2OTk4OWY6NmloaUBpM206eDM6ZnBmaDMzZjczM0AwXzMuLjMwXl4xNGBiMWJjYSM1YjExcjRnZy9gLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7171079603569183514.mp3',
			music_info: {
				id: '7171079585495272218',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7171079603569183514.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 16,
				album: '',
			},
			play_count: 968213,
			digg_count: 36914,
			comment_count: 888,
			share_count: 940,
			download_count: 4147,
			create_time: 1669647076,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ce1mlurc77u38ml1qaeg',
			video_id: '7170693366475181338',
			region: 'BD',
			title:
				'২ মাসের বেতন দিয়ে দে😂👻#foryoupage #viral #trending #foryou #tiktok #funny #comedy #ctgtiktok #video #bdtiktokofficial #attuitude #foysalahmmed07 #broken',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/8f34bed1342a4d9c90d9f0261c49b395_1669557159?x-expires=1670227200&x-signature=MddIjkom5ZhsQOsjqs1Um%2BmNY%2FQ%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/c817c1253fb64b33b6f24fe248115b11_1669557159~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=z1vraumRZDwVtIOmj1ra%2BhVEvXk%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 21,
			play: 'https://v19-us.tiktokcdn.com/e889e4c837eb4d58d37e841deb805274/638cac48/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/okETQtKazhqxfSoC9Dhab4I6wAnURddoD6IBVA/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3294&bt=1647&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=ZWc4ZGc4Nzc8NjY8aTs7NkBpamQ0cDY6ZnhwaDMzZjczM0BhNDBhMWM0NTQxLy82NTM2YSNibmk1cjRvaS5gLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/c7af5ce45b971baa7978ffbcfb353411/638cac48/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/oUnzdEjbhqzQUVfoxFKAobbtRVDIA9CwDIhjad/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3402&bt=1701&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=NDw7aGhlaTM1NDpoZzM4aUBpamQ0cDY6ZnhwaDMzZjczM0AyL2FfYi8uXjYxXmEyNjBjYSNibmk1cjRvaS5gLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7170693408829344539.mp3',
			music_info: {
				id: '7170693391150222106',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7170693408829344539.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 21,
				album: '',
			},
			play_count: 111440,
			digg_count: 16203,
			comment_count: 192,
			share_count: 137,
			download_count: 686,
			create_time: 1669557157,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ce18orbc77u78ofglmd0',
			video_id: '7170449572332866843',
			region: 'BD',
			title:
				'দুগা  ভরিদিছি⚽⚽#foryou #trending #viral #foryoupage #bdtiktokofficial #video #tiktok #bdtiktokofficial #arziyaan #messi #attuitude',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/d0f4b5d01c43495b8ad7bf4eb150b15f_1669500417?x-expires=1670227200&x-signature=thxTFsDdWC9iJuQ2xr5H7apT2eE%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/ecb35bd9937a4e259926a7ef540bc752_1669500417~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=8NeWevCvVv%2BRCqSYXFaobPXnhsk%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 19,
			play: 'https://v19-us.tiktokcdn.com/c226d93f87bba60c5e7dad3c3d75b315/638cac46/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oMjOsejEDoeQQJgVoCbx0GtARkDhjnP4DgvgB3/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2710&bt=1355&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=OGk1ZDM2NTtpPDU7ZDw1Z0BpM3Bqcjo6ZnU7aDMzZjczM0BiYzNgLl4tXy4xMGI2NjNgYSNhaWM1cjRfbC5gLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/3b4d098c7fe3225b367c118a66112fb9/638cac46/video/tos/useast2a/tos-useast2a-pve-0037-aiso/owR0ZDt4AO7osgBj0oPeDxVgQBDb1GSFfQnHEj/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=2856&bt=1428&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=OTQ1aGg6PDhoaWlpaDNmaEBpM3Bqcjo6ZnU7aDMzZjczM0AzNDUxXmJeNTMxXzFgNTNgYSNhaWM1cjRfbC5gLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7170449665614908186.mp3',
			music_info: {
				id: '7170449566477683482',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7170449665614908186.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 19,
				album: '',
			},
			play_count: 46286,
			digg_count: 9370,
			comment_count: 135,
			share_count: 92,
			download_count: 217,
			create_time: 1669500414,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000cd4md63c77ua9deplp1g',
			video_id: '7154363064261938459',
			region: 'BD',
			title:
				'এটা কোন  ধরনের রাধুনি😬#foryou #viral #trending #foryoupage #comedy #tiktok #funny #bdtiktokofficial #video #ctgtiktok #foysalahmmed07',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/0f42dea3966e49c1b94bfecadb29732b_1665754972?x-expires=1670227200&x-signature=n8Rymwr1d8JxQSSzcVt3KGJH4TU%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/187221d1337a46ceb57e681b81446a0f_1665754972~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=fk%2Fd5TbAF3fMkTnMRn0fBiN21AM%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 12,
			play: 'https://v19-us.tiktokcdn.com/7788528bf2f0eea22ebf64a976af0dc3/638cac3f/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/33e91c0820ee4347b59706a922400aab/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3684&bt=1842&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=OTdlNDNmNGg4NGg1Njg8M0BpanNzZ2Q6ZjlwZzMzZjczM0BhYDYyYTBgNV8xMF5iYWBfYSMuaWI2cjQwYTFgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/0f09cfc6029a97bc80d9d5e45fda8d3a/638cac3f/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/46a4f4d0cb304afcaf18a18e462ba165/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=3686&bt=1843&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=M2Q7PDg5NGY2aTg5ODY3Z0BpanNzZ2Q6ZjlwZzMzZjczM0AyMV8yLmFgXl4xLzYvX19eYSMuaWI2cjQwYTFgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7154402679815473946.mp3',
			music_info: {
				id: '7154363076174072602',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7154402679815473946.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 12,
				album: '',
			},
			play_count: 1797871,
			digg_count: 98425,
			comment_count: 929,
			share_count: 912,
			download_count: 5774,
			create_time: 1665754962,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000ccsnkr3c77u0crsrtp10',
			video_id: '7149880718645071131',
			region: 'BD',
			title:
				'#trending #viral #foryoupage #comedy #funny #foryou #ctgtiktok #video #tiktok #bdtiktokofficial #foysalahmmed07',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/6ec0fd8a3be04d4f9f9606e3d42aa505_1664711337?x-expires=1670227200&x-signature=Q9aL3udPija%2F6EVCTxyznPvvpWw%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/ddf3099af7954bf7990862f67c119c8d_1664711337~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=Ixnyvdewc5ScNu%2FbrWNUiwcW3r0%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 14,
			play: 'https://v19-us.tiktokcdn.com/559d72ba576f9767360f9c7682afce5f/638cac41/video/tos/useast2a/tos-useast2a-pve-0037-aiso/c9cdbe03f1614f848ebabb2f2993a6ef/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=4946&bt=2473&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=NTQ7MzNlN2U3OWlkMzg2O0BpM3N1dTM6ZnVxZjMzZjczM0AuX2JfMV8zXy8xL14xLTVhYSMucXBgcjQwaHBgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/f042f441b9f082de629f99452c8c03a2/638cac41/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/b00237347d8f4f49b87609aa9bc8c4f3/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=4976&bt=2488&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=NTlpNGk0NWY8PGZnZDU5OUBpM3N1dTM6ZnVxZjMzZjczM0AwMl9jNi5gNi4xLy02YDUxYSMucXBgcjQwaHBgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7149891235346828058.mp3',
			music_info: {
				id: '7149880732856060698',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7149891235346828058.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 14,
				album: '',
			},
			play_count: 3104093,
			digg_count: 225356,
			comment_count: 5082,
			share_count: 1775,
			download_count: 8401,
			create_time: 1664711335,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
		{
			aweme_id: 'v0f044gc0000cbmi3urc77u2mpb2c4h0',
			video_id: '7128393935046724890',
			region: 'BD',
			title:
				'welcome to Cox’s Bazar #foryoupage #trending #viral #ctgtiktok #video #tiktok #comedy #funny #bdtiktokofficial #foysalahmmed07',
			cover:
				'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/b93a368eb32c4355ae12fc260c7b9861_1659708559?x-expires=1670227200&x-signature=zOECKxV1xR5KavsxnIhfJCWQGuo%3D&s=PUBLISH&se=false&sh=&sc=dynamic_cover&l=2022120408182601019205505624C0F0C8',
			origin_cover:
				'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/2584f8e4ffd34c39871bf6f5855a69f8_1659708559~tplv-tiktokx-360p.webp?x-expires=1670227200&x-signature=Vi1qxAgjPQmwokkIzCXQcnrW2%2Fo%3D&s=PUBLISH&se=false&sh=&sc=feed_cover&l=2022120408182601019205505624C0F0C8',
			duration: 15,
			play: 'https://v19-us.tiktokcdn.com/5d12d6dc4c726ea319790499081124ce/638cac42/video/tos/useast2a/tos-useast2a-pve-0037-aiso/39a407aceaa945db898e02473e5ed574/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=6472&bt=3236&cs=0&ds=6&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=aWZkNWZnNGQ1Zmc1PDs2M0BpMzc1czU6ZnhsZTMzZjczM0AtMDNfYGMwXzYxMi0vMi1hYSNlYF9qcjRvMGpgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			wmplay:
				'https://v19-us.tiktokcdn.com/462a10b836f9f802cb6357d14bfe6c1d/638cac42/video/tos/useast2a/tos-useast2a-pve-0037-aiso/d15c02e5d3014e82b7e50eab68b7976f/?a=1233&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=6362&bt=3181&cs=0&ds=3&ft=XsFb_qT0m7jPD12K0cyq3wUTDvyKMeF~OD&mime_type=video_mp4&qs=0&rc=OzdoZmlpZTU0aGY8PGRoM0BpMzc1czU6ZnhsZTMzZjczM0AyNjMwMjUtXjAxX14wYV9jYSNlYF9qcjRvMGpgLS1kMWNzcw%3D%3D&l=2022120408182601019205505624C0F0C8&btag=80000&cc=25',
			music:
				'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7128393967318256411.mp3',
			music_info: {
				id: '7128393965400754971',
				title: 'original sound - faysalahm07',
				play: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7128393967318256411.mp3',
				cover:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_1080x1080.jpeg?x-expires=1670227200&x-signature=TnZYaJmyAn0PuZM73srAkKDNuBI%3D',
				author: 'Foysal Ahmmed 07',
				original: true,
				duration: 15,
				album: '',
			},
			play_count: 1783160,
			digg_count: 171069,
			comment_count: 1193,
			share_count: 897,
			download_count: 6039,
			create_time: 1659708553,
			author: {
				id: '6627758917948882949',
				unique_id: 'faysalahm07',
				nickname: 'Foysal Ahmmed 07',
				avatar:
					'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3dd47811f97293c1db497550477724a8~c5_300x300.jpeg?x-expires=1670227200&x-signature=kTWwQ9ZDYopvLcjP61SX1zmr%2FeM%3D',
			},
		},
	],
};

export const themeSlice = createSlice({
	name: 'site',
	initialState,
	reducers: {
		setNavHeight: (state, action: PayloadAction<number>) => {
			state.navHeight = action.payload;
		},
		setFooterHeight: (state, action: PayloadAction<number>) => {
			state.footerHeight = action.payload;
		},
		setVidoes: (state, action: PayloadAction<any>) => {
			state.feedTitle = action.payload.title ? action.payload.title : 'vidoes';
			state.videos = action.payload.videos;
		},
	},
});

export const { setNavHeight, setFooterHeight, setVidoes } = themeSlice.actions;

export default themeSlice.reducer;
