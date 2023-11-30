import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { allCategory } from '../../constants/categories';
import _ from 'lodash';
import { GenerateQueryString } from '../../utils/queryStringGenerator';
import { formatUrlString } from '../../utils/formatUrlString';
import { FilterItem } from './FilterItem';
import { Input } from '../Form';
import Rating from '../Rating';

const FilterBar = ({ query, className = 'md:block', close }: any) => {
    const [categories, setCategories] = React.useState<any>([]);
    const [priceRange, setPriceRange] = React.useState<any>({
        min: 0,
        max: 100000,
    });
    const [priceRangeError, setPriceRangeError] = React.useState<any>('');
    const filterRef = React.useRef(null);

    const router = useRouter(); // router reference

    // inital active category state
    const initalState = () => {
        const cat = allCategory.find(
            (category) =>
                formatUrlString(category.header) === formatUrlString(query.c),
        );

        if (cat) {
            setCategories(cat);
        }
    };

    // inital active category state on mount
    React.useEffect(() => {
        initalState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // inital active category state on mount on query change
    React.useEffect(() => {
        initalState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    // handle query change
    const handleQueryChange = (
        e: React.ChangeEvent<HTMLElement>,
        { key, value }: any,
    ) => {
        e.preventDefault();
        // if query is already active then remove it from query string
        // else add it to query string
        const queryString = GenerateQueryString(query, {
            key: key,
            value: formatUrlString(value),
        });

        router.push(`/products?${queryString}`);
    };

    // check if query is active
    const isQueryActive = (label: string, key: string) => {
        let queryArray = query[key]?.split(',');
        // index of query string
        let findIndex = queryArray?.findIndex(
            (item: string) => item === formatUrlString(label),
        );

        return findIndex > -1 ? true : false;
    };

    // handle price range change in query string
    const handlePriceRangeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (priceRange.min > priceRange.max) {
            setPriceRangeError('Min price must be less than max price');
            return;
        }

        const queryString = GenerateQueryString(query, {
            key: 'price',
            value: `${priceRange.min}%2C${priceRange.max}`,
        });

        router.push(`/products?${queryString}`);
    };

    return (
        <div
            ref={filterRef}
            className={`w-full lg:max-w-[300px] pr-4 ${className}`}
        >
            <div className="flex items-center justify-between border-b border-dashed pb-2 mr-2">
                <h6 className="font-medium text-gray-400">Filter</h6>

                <Link
                    href="#"
                    onClick={(e: any) => (close ? close(e) : null)}
                    className="bg-red-50 px-2 py-0.5 rounded-md text-red-500 block lg:hidden"
                >
                    Close
                </Link>
            </div>

            {/* by category */}
            <div className="border-b border-dashed border-gray-200 py-3">
                <h6 className="font-medium text-gray-400 text-sm">
                    Categories
                </h6>
                <div className="flex flex-col items-start space-y-2 py-3">
                    {categories
                        ? categories?.links?.map((sc: any, index: number) => (
                              <div
                                  key={index}
                                  className="flex items-center space-x-2 px-3"
                              >
                                  <FilterItem
                                      label={sc.label}
                                      url={formatUrlString(sc.label)}
                                      isQueryActive={isQueryActive}
                                      keyStr="sc"
                                      handleQueryChange={handleQueryChange}
                                  />
                              </div>
                          ))
                        : null}
                </div>
            </div>

            {/* by brand */}
            <div className="border-b border-dashed border-gray-200 py-3">
                <h6 className="font-medium text-gray-400 text-sm">Brands</h6>
                <div className="flex flex-col items-start space-y-2 py-3">
                    {/* brand list there... */}
                </div>
            </div>

            {/* by price */}
            <div className="border-b border-dashed border-gray-200 py-3">
                <h6 className="font-medium text-gray-400 text-sm">Price</h6>
                <div className="flex flex-col items-start space-y-2 p-3">
                    <div className="flex items-center space-x-3">
                        <Input
                            type="number"
                            placeholder="Min"
                            min={0}
                            value={priceRange.min}
                            onChange={(e) =>
                                setPriceRange({
                                    ...priceRange,
                                    min: e.target.value,
                                })
                            }
                            className="py-1.5 border text-sm focus:ring-1"
                        />
                        <Input
                            type="number"
                            placeholder="Max"
                            value={priceRange.max}
                            min={priceRange.min + 1}
                            onChange={(e) =>
                                setPriceRange({
                                    ...priceRange,
                                    max: e.target.value,
                                })
                            }
                            className="py-1.5 border text-sm focus:ring-1"
                        />
                        <button
                            type="button"
                            onClick={handlePriceRangeChange}
                            className="py-1.5 px-3 bg-blue-500 rounded-md text-white text-sm"
                        >
                            Filter
                        </button>
                    </div>
                </div>
                <p className="text-xs text-red-500 empty:hidden">
                    {priceRangeError}
                </p>
            </div>

            {/* by Rating */}
            <div className="border-b border-dashed border-gray-200 py-3">
                <h6 className="font-medium text-gray-400 text-sm">Rating</h6>
                <div className="flex flex-col items-start space-y-2 p-3">
                    {[1, 2, 3, 4, 5].map((rating, index) => (
                        <FilterItem
                            keyStr="rating"
                            queryStringGenerator={GenerateQueryString}
                            handleQueryChange={handleQueryChange}
                            isQueryActive={isQueryActive}
                            label={rating.toString()}
                            className="flex items-center space-x-2"
                            key={index}
                        >
                            <Rating
                                rating={rating}
                                iconClassName="w-3 h-3 mt-1"
                                className="pointer-events-none"
                            />
                        </FilterItem>
                    ))}
                </div>
            </div>

            {/* by Color */}
            <div className="border-b border-dashed border-gray-200 py-3">
                <h6 className="font-medium text-gray-400 text-sm">Colors</h6>
                <div className="flex flex-col items-start space-y-2 p-3">
                    <FilterItem
                        label="Red"
                        url={formatUrlString('Red')}
                        isQueryActive={isQueryActive}
                        keyStr="color"
                        handleQueryChange={handleQueryChange}
                    />

                    <FilterItem
                        label="White"
                        url={formatUrlString('White')}
                        isQueryActive={isQueryActive}
                        keyStr="color"
                        handleQueryChange={handleQueryChange}
                    />

                    <FilterItem
                        label="Black"
                        url={formatUrlString('Black')}
                        isQueryActive={isQueryActive}
                        keyStr="color"
                        handleQueryChange={handleQueryChange}
                    />

                    <FilterItem
                        label="Green"
                        url={formatUrlString('Green')}
                        isQueryActive={isQueryActive}
                        keyStr="color"
                        handleQueryChange={handleQueryChange}
                    />

                    <FilterItem
                        label="Blue"
                        url={formatUrlString('Blue')}
                        isQueryActive={isQueryActive}
                        keyStr="color"
                        handleQueryChange={handleQueryChange}
                    />
                </div>
            </div>

            {/* by Color */}
            <div className="border-b border-dashed border-gray-200 py-3">
                <h6 className="font-medium text-gray-400 text-sm">Size</h6>
                <div className="flex flex-col items-start space-y-2 p-3">
                    <FilterItem
                        label="SM"
                        url={formatUrlString('SM')}
                        isQueryActive={isQueryActive}
                        keyStr="sz"
                        handleQueryChange={handleQueryChange}
                    />
                    <FilterItem
                        label="M"
                        url={formatUrlString('M')}
                        isQueryActive={isQueryActive}
                        keyStr="sz"
                        handleQueryChange={handleQueryChange}
                    />

                    <FilterItem
                        label="L"
                        url={formatUrlString('L')}
                        isQueryActive={isQueryActive}
                        keyStr="sz"
                        handleQueryChange={handleQueryChange}
                    />

                    <FilterItem
                        label="XL"
                        url={formatUrlString('XL')}
                        isQueryActive={isQueryActive}
                        keyStr="sz"
                        handleQueryChange={handleQueryChange}
                    />

                    <FilterItem
                        label="XXL"
                        url={formatUrlString('XXL')}
                        isQueryActive={isQueryActive}
                        keyStr="sz"
                        handleQueryChange={handleQueryChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
