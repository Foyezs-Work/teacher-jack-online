import React from 'react';
import MainLayout from '../layouts/MainLayout';
import BDCoruseModule from '../components/bdCoruse/BDCoruseModule';
import BDFaq from '../components/bdCoruse/BDFaq';

const BDCoruse = () => {
    return (
        <MainLayout>
            <div className="bd_coruse_banner">
                <h3>Teacher Jack Online Coruse</h3>
            </div>
            <BDCoruseModule />
            <BDFaq />
        </MainLayout>
    );
};

export default BDCoruse;