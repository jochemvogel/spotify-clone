export interface Skill {
	name: string;
	color: string;
	src?: string;
}

export interface VideoCardType {
	title: string;
	artist: string;
	description: string;
	img: string;
	album: string;
	duration: number;
	video?: string;
}

export interface RootListItem {
	name: string;
	link: string;
}

export interface FavoritePlaylistItem {
	id: string;
	name: string;
	url: string;
	image: string;
	color: string;
}

export interface SmallFavoritePlaylistItem {
	id: string;
	color: {
		hue: string;
		saturation: string;
		lightness: string;
	};
}
