import React from "react";

interface Props extends React.PropsWithChildren {
    number: number;
}

const Person: React.FC<Props> = ({number}) => {
    return (
        <div className="circle">
            <p>{number}</p>
        </div>
    )
}

export default Person;
