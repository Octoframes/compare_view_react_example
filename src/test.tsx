import React, { useEffect } from "react";

const Test: React.FC = () => {
    useEffect(() => {
        console.log("test");
    }, []);

    return (
        <div>
            Hello World!
        </div>
    );
}

export default Test;

