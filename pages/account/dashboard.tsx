import Link from 'next/link';
import * as React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import OrderLists from '../../sections/OrderLists';
import ProfileInfo from '../../sections/ProfileInfo';

const slideLinks = [
    {
        name: 'Orders',
        href: '#orders',
        current: true,
    },
    {
        name: 'Profile',
        href: '#profiles',
        current: false,
    },
    {
        name: 'Logout',
        href: '#',
        current: false,
    },
];

const Profile = () => {
    const [activeRoute, setActiveRoute] = React.useState('');

    const { asPath } = useRouter();

    React.useEffect(() => {
        const currentRoute = asPath.split('#')[1];
        setActiveRoute(`#${currentRoute}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        setActiveRoute(`#orders`);
    }, []);

    return (
        <Layout>
            <React.Fragment>
                <div className="container">
                    <div className="p-8 flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-32 lg:w-72 pr-5">
                            <div className="flex flex-col border">
                                {slideLinks.map((link) => (
                                    <div
                                        key={link.name}
                                        className={`w-full border-b last:border-b-0 hover:border-l-4 hover:border-l-blue-500 hover:bg-gray-100 ${
                                            activeRoute === link.href
                                                ? 'bg-gray-100'
                                                : ''
                                        }`}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() =>
                                                setActiveRoute(link.href)
                                            }
                                            className="block hover:cursor-pointer p-2"
                                        >
                                            # {link.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* order list */}
                        {activeRoute === '#orders' ? (
                            <div className="flex-1">
                                <div>
                                    <div className="mb-5 md:mb-8 border-b border-dashed">
                                        <h4 className="font-bold mb-2">
                                            Orders
                                        </h4>
                                    </div>
                                    <div className="">
                                        <OrderLists />
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {/* Profile info */}
                        {activeRoute === '#profiles' ? (
                            <div className="flex-1">
                                <div>
                                    <div className="mb-5 md:mb-8 border-b border-dashed">
                                        <h4 className="font-bold mb-2">
                                            Profiles
                                        </h4>
                                    </div>
                                    <div className="">
                                        <ProfileInfo />
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </React.Fragment>
        </Layout>
    );
};

export default Profile;
