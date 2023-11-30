import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as React from 'react';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import _ from 'lodash';
import FilterBar from '../../components/Filter/FilterBar';
import { outsiteClick } from '../../utils/outsiteClick';

const ProductCard = dynamic(() => import('../../components/Card'));

const Products = (props: any) => {
    const [activePage, setActivePage] = React.useState(1);
    const [filterOptionIsOpen, setFilterOptionIsOpen] = React.useState(false);
    const filterBarRef = React.useRef(null);
    const handleFilterOption = (e: any) => {
        e.preventDefault();
        setFilterOptionIsOpen(!filterOptionIsOpen);
    };

    // check screen size
    React.useEffect(() => {
        const handleResize = _.debounce(() => {
            if (window.innerWidth > 992) {
                setFilterOptionIsOpen(false);
            }
        }, 500);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout>
            <div className="container relative md:flex md:gap-5 py-4 lg:py-8">
                <FilterBar
                    query={props.query}
                    close={() => setFilterOptionIsOpen(false)}
                    className={`${
                        filterOptionIsOpen
                            ? 'block fixed bottom-0 left-0 p-4 border-t-4 border-blue-500 h-[85%] shadow-[0_-2px_60px_rgba(0,0,0,.15)] overflow-auto max-w-full z-30 bg-white'
                            : 'hidden'
                    } lg:relative lg:block lg:shadow-none lg:overflow-visible lg:h-auto lg:max-w-none lg:z-auto lg:bg-transparent lg:border-none lg:p-0 lg:mt-0 lg:ml-4 lg:w-72`}
                />

                {/* products */}
                <div className="flex-1">
                    <div className="mb-3 flex items-center justify-between border-b border-dashed">
                        <h6 className="font-medium pb-2 text-gray-400">
                            Products
                        </h6>

                        <Link
                            href="#"
                            onClick={handleFilterOption}
                            className="text-gray-400 block lg:hidden"
                        >
                            Filter
                        </Link>
                    </div>

                    <div className="grid grid-cols-12 gap-3 md:gap-6 2xl:gap-8">
                        {[...Array(24)].map((_, index) => (
                            <div
                                key={index}
                                className="col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-3"
                            >
                                <ProductCard
                                    title={`sweater-1 for men's fations`}
                                    alt=""
                                    href={`/product/1`}
                                    image={`/cloths/sweater-1.png`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-end mt-5">
                        <Pagination
                            viewParPage={8}
                            totalItems={100}
                            currentPage={activePage}
                            onPageChange={(page) => setActivePage(page)}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async (context) => {
    // query string from url
    const { query } = context;

    return {
        props: { query },
    };
};
