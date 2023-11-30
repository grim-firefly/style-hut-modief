import React, { forwardRef } from 'react';

type extraPropsType = {
    label?: string;
    htmlFor?: string;
    labelClassName?: string;
};

const InputComponent: React.ForwardRefRenderFunction<
    HTMLInputElement | undefined,
    React.InputHTMLAttributes<HTMLInputElement> & extraPropsType
> = (
    {
        className = 'bg-slate-100',
        label,
        htmlFor = '',
        labelClassName = '',
        ...props
    },
    ref,
) => {
    const defaultClassName =
        'w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';

    return (
        <label htmlFor={htmlFor} className="flex flex-col gap-2">
            <span className="text-gray-500 empty:hidden">{label}</span>
            <input
                {...props}
                className={`${defaultClassName} ${className}`}
                ref={ref as any}
            />
        </label>
    );
};

// export input component
const Input = forwardRef<
    HTMLInputElement | undefined,
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement> & extraPropsType,
        HTMLInputElement
    >
>(InputComponent) as React.FC<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement> & extraPropsType,
        HTMLInputElement
    >
>;

export default Input;
