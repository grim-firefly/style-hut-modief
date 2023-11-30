import Link from 'next/link';
import React from 'react';

const NewCommentNotification = () => {
    return (
        <div>
            <div className="flex items-center py-2">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200/40">
                        <i className="fi fi-rr-comment text-lg -mb-1 text-green-500" />
                    </div>
                    <div>
                        <p className="text-sm sm:text-sm block font-medium text-gray-600 mb-1">
                            New comment
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm ">
                            <span className="font-semibold text-zinc-500">
                                John Doe
                            </span>
                            <span> commented on your </span>
                            <Link
                                href="/"
                                className="font-semibold text-blue-500 sm:text-zinc-500 hover:text-blue-500 whitespace-nowrap"
                            >
                                #123423
                            </Link>
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-400">
                            2 hours ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCommentNotification;
