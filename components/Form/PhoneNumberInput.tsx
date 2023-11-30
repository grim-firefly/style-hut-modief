import * as React from 'react';
import countryData from 'country-data';
import { usePopper } from 'react-popper';
import { dropdownModifiers } from '../../utils/popper';
import Input from './Input';
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';

import { isValidPhoneNumber } from 'libphonenumber-js';
import { outsiteClick } from '../../utils/outsiteClick';

const PhoneNumberInput = () => {
    const [refElement, setRefElement] = React.useState<any>(null);
    const [popperElement, setPopperElement] = React.useState<any>(null);
    const [show, setShow] = React.useState(false);
    const [phone, setPhone] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);

    const [selectedCountry, setSelectedCountry] = React.useState<any>();
    const wrapperRef = React.useRef(null);

    const { styles, attributes } = usePopper(refElement, popperElement, {
        placement: 'bottom-start',
        modifiers: [
            ...dropdownModifiers.modifiers,
            { name: 'offset', options: { offset: [0, 14] } },
        ],
    });

    const countryOptions = countryData.countries.all
        .filter((country) => country.countryCallingCodes.length > 0)
        .map((country) => ({
            title: country.name,
            val: country.alpha2,
            alpha3: country.alpha3,
            countryCallingCodes: country.countryCallingCodes,
        }));

    const handleCountryChange = (
        e: React.MouseEvent<HTMLLIElement>,
        country: typeof countryOptions[0],
    ) => {
        setSelectedCountry(country);
        setShow(false);
    };

    React.useEffect(() => {
        setSelectedCountry(countryOptions[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        if (wrapperRef) {
            outsiteClick(wrapperRef, () => setShow(false));
        }
    }, [wrapperRef]);

    // check if phone number is valid

    React.useEffect(() => {
        if (phone) {
            const isValid = isValidPhoneNumber(
                `${selectedCountry?.countryCallingCodes}${phone}`,
            );
            setIsValid(isValid);
        }
    }, [phone, selectedCountry]);

    return (
        <div ref={wrapperRef}>
            <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-3"
            >
                Phone
            </label>

            <div className="relative border rounded-md">
                <div className="flex items-center">
                    <button
                        ref={setRefElement}
                        onClick={() => setShow(!show)}
                        className="flex items-center space-x-2 whitespace-nowrap py-2 px-3 border-r text-xs font-medium text-gray-500"
                    >
                        <span>{`${selectedCountry?.val} (${selectedCountry?.countryCallingCodes})`}</span>

                        <span className={`-mb-1 block`}>
                            <i className="fi fi-rr-angle-small-down" />
                        </span>
                    </button>
                    <Input
                        type="text"
                        value={formatPhoneNumber(phone)?.toString() || ''}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full focus:ring-0"
                    />
                    {isValid ? (
                        <span className="absolute top-1/2 right-3 -translate-y-1/2">
                            <span className={`-mb-1 block`}>
                                <i className="fi fi-sr-shield-check text-green-500" />
                            </span>
                        </span>
                    ) : null}
                </div>
                {show ? (
                    <div
                        ref={setPopperElement}
                        style={{
                            ...styles.popper,
                            width: '100%',
                            zIndex: 9999,
                        }}
                        {...attributes}
                    >
                        <div className=" bg-white shadow-xl rounded-lg py-3 max-h-[300px] overflow-hidden overflow-y-auto scrollbar">
                            <ul>
                                {countryOptions.map((country, index) => (
                                    <li
                                        key={index}
                                        className="px-3 py-1 text-sm hover:bg-gray-100 select-none"
                                        onClick={(e) =>
                                            handleCountryChange(e, country)
                                        }
                                    >
                                        {country.title} (
                                        {country.countryCallingCodes})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PhoneNumberInput;
