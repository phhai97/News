export interface INew {
    id: number;
    title: string;
    summary: string;
    published: number;
    modified: number;
    url: string;
    thumb: IThumb;
    type: boolean;
    category: ICategory[];
    track_cate: number;
    author: string;
    credit: string;
    comment_mode: string;
    comment_count: number;
    share_count: number;
    native: boolean;
    preview: IPreview;
    series: boolean;
}

export interface ICategory {
    id: number;
    name: string;
    slug: string;
    url: string;
}

export interface IPreview {}

export interface IThumb {
    default: string;
    mobile: string;
    caption: string;
}
