import * as React from 'react';

const TextArea: React.FC<
    React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >
> = ({ className = 'bg-slate-100 h-32', ...props }) => {
    return (
        <textarea
            className={`w-full px-4  py-3 rounded-lg resize-none focus:outline-none focus:border-primary-500 ${className}`}
            {...props}
        />
    );
};

export default TextArea;
