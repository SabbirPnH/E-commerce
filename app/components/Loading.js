import React from 'react';
import { RotatingLines } from "react-loading-indicators";

const Loading = () => {
    return (
        <div className="flex justify-center items-center py-24">
            <RotatingLines
                visible={true}
                height={96}
                width={96}
                color="grey"
                strokeWidth={5}
                animationDuration={0.75}
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}

export default Loading; // Make sure to export the component like this
