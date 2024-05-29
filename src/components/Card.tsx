import React from "react";

type CardProps = {
    title: string;
    children: React.ReactNode;
}

export const Card = ({
    title,
    children
                     }: CardProps) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {children}
            </div>
        </div>
    )
}