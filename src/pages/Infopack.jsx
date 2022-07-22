import React from 'react';
import NextBatch from '../components/package/NextBatch';
import PackageBanner from '../components/package/PackageBanner';
import MainLayout from '../layouts/MainLayout';

const Infopack = () => {
    return (
        <MainLayout title="Package">
            <PackageBanner />
            <NextBatch/>
        </MainLayout>
    );
};

export default Infopack;