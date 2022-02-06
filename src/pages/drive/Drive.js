import React, {useEffect} from 'react';

const Drive = () => {

    useEffect(() => {
        document.title = 'Stoke Drive | Votre drive';
    }, [])

    return (
        <div>
            <h1>LE DRIVEEEE</h1>
        </div>
    );
}

export default Drive;