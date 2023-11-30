import Image from 'next/image';
import React from 'react';

type methodProps = {
    imageSrc: string;
    alt: string;
    onClick?: () => void;
    active?: boolean;
};

export const Method = ({
    imageSrc = '',
    alt = '',
    onClick,
    active = false,
}: methodProps) => {
    return (
        <div
            className={`px-5 py-3 h-14  flex items-center justify-center rounded-md hover:bg-slate-200 ${
                active ? 'bg-slate-200' : 'bg-zinc-50'
            }`}
            onClick={() => (onClick ? onClick() : null)}
        >
            <Image
                src={imageSrc}
                alt={alt}
                width={50}
                height={50}
                loading="lazy"
            />
        </div>
    );
};
