import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface siteState {
	navHeight?: number;
	footerHeight?: number;
	feedTitle?: any;
	videos?: any;
	videoLoading?: boolean;
}

const initialState: siteState = {
	navHeight: 0,
	footerHeight: 0,
	feedTitle: null,
	videos: null,
	videoLoading: false,
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
		setVideoLoading: (state, action: PayloadAction<boolean>) => {
			state.videoLoading = action.payload;
		},
		setVidoes: (state, action: PayloadAction<any>) => {
			state.feedTitle = action.payload;
			state.videos = action.payload.videos;
		},
	},
});

export const { setNavHeight, setFooterHeight, setVidoes, setVideoLoading } =
	themeSlice.actions;

export default themeSlice.reducer;
