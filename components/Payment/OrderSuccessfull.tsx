import Link from 'next/link';

export const OrderSuccessfull = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex items-center justify-center text-6xl text-green-600">
                <i className="fi fi-ss-shield-check text-primary-500" />
            </div>
            <div className="text-2xl font-semibold text-center mt-5">
                Order Successfully Placed
            </div>
            <div className="text-center mt-3">
                Thank you for shopping with us. We will contact you shortly
            </div>
            <div className="text-center mt-3">
                <Link href="/" className="text-blue-500">
                    Go to home
                </Link>
            </div>
        </div>
    );
};
