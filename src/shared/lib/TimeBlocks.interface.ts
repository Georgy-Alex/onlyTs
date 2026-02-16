export type TimeBlocksEvent = {
    id: string | number;
    year: number | string;
    title: string;
    description: string;
};

export type TimeBlocksPeriod = {
    id: string | number;
    title: string;
    events: TimeBlocksEvent[];
};

export type SliderButtonDisabledState = null | "left" | "right" | 'both';
