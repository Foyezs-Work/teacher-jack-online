import React from 'react';
import NextBatch from '../components/package/NextBatch';
import OurPackageServices from '../components/package/OurPackageServices';
import PackageBanner from '../components/package/PackageBanner';
import MainLayout from '../layouts/MainLayout';

const Infopack = () => {
    return (
        <MainLayout title="Package">
            <PackageBanner />
            <NextBatch/>
            <OurPackageServices/>
        </MainLayout>
    );
};

export default Infopack;