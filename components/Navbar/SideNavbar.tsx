import Link from 'next/link';
import React from 'react';
import { menuItems } from '../../fakeData/menuItems';

const SideNavbar = ({ setNavIsOpen, onClick, className }: any) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [menuId, setMenuId] = React.useState<number | string | null>(null);

    // controlling the menu
    const handleItemClick = (id: number | string) => {
        if (id === menuId) {
            setMenuId(null);
            setIsOpen(!isOpen);
        } else {
            setIsOpen(true);
            setMenuId(id);
        }
    };

    // controlling the sub menu
    const handleSubItemClick = (id: number | string) => {
        setNavIsOpen(false);
        setIsOpen(false);
        setMenuId(null);
    };

    return (
        <div className={className}>
            <div className="h-full bg-white overflow-y-scroll cnx__sideNav_scrollbar">
                <div className="bg-blue-600 h-11 justify-between flex ps-4 pe-1 items-center fixed w-full top-0">
                    <h1 className="text-white text-xl mx-auto font-semibold">
                        StyleHut
                    </h1>
                    <div
                        className="p-1 cursor-pointer bg-white rounded-full mr-1"
                        onClick={(e) => onClick && onClick(e)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                            className="w-3 h-3 rounded fill-black md:hidden"
                        >
                            <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" />
                        </svg>
                    </div>
                </div>
                <div className="mt-12 mb-3">
                    <ul>
                        {menuItems.map((item) => (
                            <li
                                className="border-b cursor-pointer"
                                key={item.id}
                            >
                                <div
                                    className="flex justify-between items-center"
                                    onClick={() => handleItemClick(item?.id)}
                                >
                                    <h1
                                        className={`py-2 pl-2 ms-4 text-base font-normal ${
                                            isOpen && menuId == item?.id
                                                ? 'text-primary'
                                                : 'text-[#666]'
                                        }`}
                                    >
                                        {item?.menu}
                                    </h1>
                                    {isOpen && menuId == item?.id ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="Outline"
                                            viewBox="0 0 24 24"
                                            className="h-3 w-3 fill-gray-500 me-2"
                                        >
                                            <rect
                                                y="11"
                                                width="24"
                                                height="2"
                                                rx="1"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="Outline"
                                            viewBox="0 0 24 24"
                                            className="h-3 w-3 fill-gray-500 me-2"
                                        >
                                            <path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z" />
                                        </svg>
                                    )}
                                </div>

                                {isOpen && menuId == item?.id && (
                                    <ul>
                                        {item?.sub?.length > 0 &&
                                            item.sub.map((sub) => (
                                                <li
                                                    className="border-t cursor-pointer"
                                                    key={sub.id}
                                                    onClick={() =>
                                                        handleSubItemClick(
                                                            sub.id,
                                                        )
                                                    }
                                                >
                                                    <Link
                                                        href={sub.url}
                                                        className="flex justify-between items-center"
                                                    >
                                                        <h1 className="py-2 pl-2 text-start ps-10 text-base font-normal">
                                                            {sub?.name}
                                                        </h1>

                                                        {/* use if needed more nested menu  */}

                                                        {/* {isOpen && menuId == item?.id ? (
                                                            <MinusIcon className="h-6 w-6 me-2 fill-slate-400" />
                                                        ) : (
                                                            <PlusIcon className="h-6 w-6 me-2 fill-slate-400" />
                                                        )} */}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;
