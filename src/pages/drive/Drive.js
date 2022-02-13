import React, {useEffect} from 'react';
import Sidebar from '../components/Sidebar';

const Drive = () => {

    useEffect(() => {
        document.title = 'Skote Drive | Votre drive';
    }, [])

    return (
        <div>
            Salut
            <Sidebar />
        </div>
    );
}

export default Drive;