import Image from 'next/image';

import React from 'react';
import Dropdown from '../Dropdown';
import { DBSidebarLink } from './DBSidebarLink';

const DashboardSidebar = () => {
    return (
        <div className="w-full hidden lg:flex flex-col max-w-[250px] h-screen overflow-y-auto scrollbar bg-white border-r border-dashed">
            {/* logo  */}
            <div className="h-28 flex items-center px-6 ">
                <div className="relative w-32 h-10">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        fill
                        sizes="180px"
                        priority
                    />
                </div>
            </div>

            {/* menu  */}
            <div className="flex-1">
                <div className="flex flex-col gap-y-3 px-3 mb-14">
                    <DBSidebarLink
                        href="/dashboard"
                        icon="fi fi-rr-home"
                        text="Home"
                    />

                    <DBSidebarLink
                        href="/dashboard/orders"
                        icon="fi fi-rr-truck-loading"
                        text="Orders"
                    />

                    <DBSidebarLink
                        href="/dashboard/products"
                        icon="fi fi-rr-shopping-bag"
                        text="Products"
                    />

                    <DBSidebarLink
                        href="/dashboard/customers"
                        icon="fi fi-rr-users-alt"
                        text="Customers"
                    />
                </div>

                <div className="flex flex-col gap-y-3 px-3">
                    <DBSidebarLink
                        href="/dashboard/settings"
                        icon="fi fi-rr-settings"
                        text="Settings"
                    />

                    <DBSidebarLink
                        href="/dashboard/help"
                        icon="fi fi-rr-interrogation"
                        text="Help Center"
                    />
                </div>
            </div>

            <div className="px-3 py-6 flex items-center gap-x-3">
                <div>
                    <div className="w-11 h-11 rounded-full bg-gray-500" />
                </div>
                <div className="w-full">
                    <h6>Seller Name</h6>
                    <span className="block -mt-1 text-xs font-medium">
                        New Seller
                    </span>
                </div>
                <Dropdown>
                    <Dropdown.Toggle>
                        <button className="w-8 h-8 hover:bg-gray-100  rounded-full">
                            <i className="fi fi-ss-menu-dots-vertical" />
                        </button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <div className="p-3 mb-3 bg-white shadow-[0_0_6px_rgba(0,0,0,0.08)] rounded-lg">
                            <div className="flex flex-col gap-y-3">
                                <DBSidebarLink
                                    href="/dashboard/profile"
                                    icon="fi fi-rr-user"
                                    text="Profile"
                                />
                                <DBSidebarLink
                                    href="/dashboard/logout"
                                    icon="fi fi-rr-sign-out-alt"
                                    text="Logout"
                                />
                            </div>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default DashboardSidebar;
