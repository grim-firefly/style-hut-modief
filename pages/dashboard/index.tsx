import Image from 'next/image';
import Link from 'next/link';
import OverviewCard from '../../components/Card/OverviewCard';
import EarningChart from '../../components/Charts/EarningCharts';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import NewCommentNotification from '../../components/Notification/NewCommentNotification';
import StokeOutNotification from '../../components/Notification/StokeOutNotification';
import Rating from '../../components/Rating';
import OrdersTable from '../../components/Table/DataTable';

const Overview = () => {
    return (
        <DashboardLayout>
            <div className="p-5 md:p-8">
                <h3 className="mb-5">Dashboard</h3>

                <div className="grid grid-cols-12 grid-row-2 gap-3 md:gap-5">
                    <div className="col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-8 row-span-1">
                        <div className="grid grid-cols-12 gap-3 md:gap-5">
                            <OverviewCard
                                label="Total Sales"
                                title="$1,234.00"
                                icon="fi fi-rr-credit-card text-blue-500"
                                credit={true}
                                className="col-span-6 md:col-span-12 xl:col-span-6 2xl:col-span-3"
                            />
                            <OverviewCard
                                label="Total Expenses"
                                icon="fi fi-br-chart-pie-alt text-orange-500"
                                title="$27,234.00"
                                credit={false}
                                className="col-span-6 md:col-span-12 xl:col-span-6 2xl:col-span-3"
                            />
                            <OverviewCard
                                label="Total Visitors"
                                icon="fi fi-br-users-alt text-purple-500"
                                title="18,234"
                                credit={true}
                                className="col-span-6 md:col-span-12 xl:col-span-6 2xl:col-span-3"
                            />
                            <OverviewCard
                                label="Total Orders"
                                icon="fi fi-rr-shopping-cart text-sky-500"
                                title="1,234"
                                credit={true}
                                className="col-span-6 md:col-span-12 xl:col-span-6 2xl:col-span-3"
                            />
                        </div>
                    </div>

                    {/* Notifications  */}
                    <div className="col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-4 row-span-1 xl:row-span-2 border border-dashed py-3 md:py-4 rounded-md">
                        <div className="px-3 md:px-6 w-full h-full flex flex-col ">
                            <div className="flex items-center justify-between mb-3 md:mb-5">
                                <h5 className="">{'Notifications'}</h5>
                                <Link
                                    href="/orders"
                                    className="text-sm hover:underline text-zinc-500"
                                >
                                    View All
                                </Link>
                            </div>
                            <div className="flex-1 h-full">
                                <div className="flex flex-col">
                                    <div className="border-b border-dashed last:border-b-0 py-1 md:py-2 even:bg-slate-50/30 px-2 md:px-3 hover:bg-slate-50">
                                        <StokeOutNotification />
                                    </div>
                                    <div className="border-b border-dashed py-1 md:py-2 even:bg-slate-50/30 px-2 md:px-3 hover:bg-slate-50">
                                        <NewCommentNotification />
                                    </div>
                                    <div className="border-b border-dashed last:border-b-0 py-1 md:py-2 even:bg-slate-50/30 px-2 md:px-3 hover:bg-slate-50">
                                        <StokeOutNotification />
                                    </div>
                                    <div className="border-b border-dashed py-1 md:py-2 even:bg-slate-50/30 px-2 md:px-3 hover:bg-slate-50">
                                        <NewCommentNotification />
                                    </div>
                                    <div className="border-b border-dashed last:border-b-0 py-1 md:py-2 even:bg-slate-50/30 px-2 md:px-3 hover:bg-slate-50">
                                        <StokeOutNotification />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* earning graph */}
                    <div className="col-span-12 xl:col-span-8 border border-dashed py-3 px-0 md:p-5 rounded-md ">
                        <h5 className="mb-5">Earning Graph</h5>
                        <div className="h-[150px] md:h-[200px] lg:h-[250px] xl-[300px] 2xl:h-[350px] text-xs md:text-base">
                            <EarningChart />
                        </div>
                    </div>

                    {/* Tanding Product */}
                    <div className="col-span-12 md:col-span-4">
                        <div className="h-full border border-dashed p-5 rounded-md">
                            <h5 className="mb-5">Trending Products</h5>
                            <div className="flex flex-col gap-4">
                                {[...Array(4)].map((_, index) => (
                                    <div
                                        className="flex gap-4 odd:bg-slate-50/50 hover:bg-slate-50 py-2"
                                        key={index}
                                    >
                                        <div className="relative w-16 h-16 border rounded-lg">
                                            <Image
                                                src={`/cloths/sweater-${
                                                    index + 1
                                                }.png`}
                                                alt=""
                                                fill
                                                sizes="64px"
                                            />
                                        </div>

                                        <div>
                                            <h6>
                                                <Link
                                                    href="/products/1"
                                                    className="hover:text-blue-500"
                                                >
                                                    Sweater 1 (Black) - M
                                                </Link>
                                            </h6>
                                            <p className="text-sm text-zinc-500">
                                                1,234 Sales
                                            </p>

                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="flex items-center gap-1">
                                                    <Rating
                                                        rating={4.5}
                                                        iconClassName="w-3 h-3"
                                                    />
                                                    <span className="text-xs text-zinc-500">
                                                        (4.5)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="col-span-12 md:col-span-8">
                        <div className="h-full border border-dashed p-5 rounded-md">
                            <div className="flex items-center justify-between mb-5">
                                <h6>Recent Orders</h6>
                                <Link
                                    href="/orders"
                                    className="text-sm hover:underline text-zinc-500"
                                >
                                    View All
                                </Link>
                            </div>
                            {/* <OrdersTable /> */}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Overview;
