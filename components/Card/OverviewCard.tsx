import React from 'react';

type props = {
    className?: string;
    credit?: boolean;
    label?: string;
    icon?: string;
    title?: string;
};

const OverviewCard = ({
    className,
    label,
    icon = '',
    title,
    credit = true,
}: props) => {
    return (
        <div
            className={`border border-dashed hover:border-blue-500 rounded-lg p-3 md:p-5 ${className}`}
        >
            <div className="flex items-center justify-between">
                <i className={`${icon} text-2xl text-gray-400`} />
                <span
                    className={`font-bold ${
                        credit ? 'text-green-600' : 'text-red-500'
                    }`}
                >
                    +30%
                </span>
            </div>
            <div className="mt-1 md:mt-2">
                <h5 className="text-base md:text-lg">{title}</h5>
                <span className="text-xs md:text-sm text-gray-500">
                    {label}
                </span>
            </div>
        </div>
    );
};

export default OverviewCard;
