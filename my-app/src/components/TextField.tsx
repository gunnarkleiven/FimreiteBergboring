import React from 'react';

interface Props {
    text: string;
}

export const TextField: React.FC<Props> = ({ text }) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
}
