export const outsiteClick = (ref: any, callback: Function) => {
    const handleOutsiteClick = (event: MouseEvent) => {
        if (ref && ref.current && ref.current.contains(event.target as Node)) {
            return;
        }

        callback();
        document.removeEventListener('click', handleOutsiteClick);
    };

    document.addEventListener('click', handleOutsiteClick);

    return () => {
        document.removeEventListener('click', handleOutsiteClick);
    };
};
