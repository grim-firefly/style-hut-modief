import Link from 'next/link';
import { useRouter } from 'next/router';

type propstype = {
    href: string;
    icon: string;
    text: string;
};

export const DBSidebarLink = ({ href = '/', icon, text }: propstype) => {
    const router = useRouter();

    const isActive = router.pathname === href;
    return (
        <>
            <Link
                href={href}
                className={`text-lg font-medium py-2 text-gray-500 px-3 rounded-lg flex items-center gap-x-2 hover:text-black/80 hover:cursor-pointer hover:bg-black/5 align-middle ${
                    isActive ? 'bg-black/5' : ''
                }`}
            >
                <i className={`${icon} -mb-1`} />
                {text}
            </Link>
        </>
    );
};
