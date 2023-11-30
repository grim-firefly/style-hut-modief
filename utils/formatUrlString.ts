export const formatUrlString = (url: string) => {
    return url
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/&/g, 'and')
        .replace(/\'/g, '');
};
