import Link from 'next/link';

const StokeOutNotification = () => {
    return (
        <div className="flex items-center py-2">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <i className="fi fi-rr-info text-lg -mb-1 text-orange-500" />
                </div>
                <div>
                    <p className="text-xs sm:text-sm block font-medium text-gray-600 mb-1">
                        Stoke Information
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm flex gap-1">
                        <Link
                            href="/"
                            className="font-semibold text-blue-500 sm:text-gray-500 hover:text-blue-500"
                        >
                            #3234234
                        </Link>
                        has been stoked out
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                        2 hours ago
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StokeOutNotification;
