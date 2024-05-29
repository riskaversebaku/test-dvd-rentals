import React from "react";

type ButtonProps = {
    className: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}

export function Button({
                           children,
                           isLoading,
                           className,
                           type,
                           onClick,
                           isDisabled
                       }: ButtonProps) {

    return (
        <button type={type} className={className} onClick={onClick} disabled={isLoading || isDisabled}>
            {isLoading && <span data-testid="spinner" className="spinner-border spinner-border-sm me-2"
                                style={{width: 13, height: 13}} role="status" aria-hidden="true"></span>}
            {children}
        </button>
    );
}