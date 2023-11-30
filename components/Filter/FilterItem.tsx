export const FilterItem = ({
    label,
    url,
    isQueryActive,
    keyStr,
    children,
    className = 'text-sm',
    checkboxClassName = '',
    handleQueryChange,
}: any) => {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <input
                type="checkbox"
                id={url}
                checked={isQueryActive(label, keyStr)}
                onChange={(e) =>
                    handleQueryChange(e, {
                        key: keyStr,
                        value: label,
                    })
                }
                className={checkboxClassName}
            />
            <label htmlFor={url} className="select-none">
                {children ? children : label}
            </label>
        </div>
    );
};
