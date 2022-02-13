import React, {useEffect} from 'react';
import Sidebar from '../components/Sidebar';

const Drive = () => {

    useEffect(() => {
        document.title = 'Stoke Drive | Votre drive';
    }, [])

    return (
        <div>
            <Sidebar />
        </div>
    );
}

export default Drive;