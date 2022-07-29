import React from 'react';
import { Outlet } from 'react-router-dom';

const title = {
    textAlign:"center"
}

const Catalog = () => {
    return (
        <div>
            <h1 style={title}>Catalog</h1>
            <Outlet/>
        </div>
    );
}

export default Catalog;