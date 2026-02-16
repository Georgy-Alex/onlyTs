export const getSegmentCountByWidth = (w: number) => {
    if (w < 480) return 2;
    if (w < 768) return 3;
    if (w < 1024) return 4;
    if (w < 1280) return 5;
    return 6;
};
