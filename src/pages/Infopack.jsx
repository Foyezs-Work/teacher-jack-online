import React from 'react';
import CourseModule from '../components/package/CourseModule';
import NextBatch from '../components/package/NextBatch';
import OurPackageServices from '../components/package/OurPackageServices';
import PackageBanner from '../components/package/PackageBanner';
import MainLayout from '../layouts/MainLayout';

const Infopack = () => {
    return (
        <MainLayout title="Package">
            <PackageBanner />
            <NextBatch/>
            <CourseModule/>
            <OurPackageServices/>
        </MainLayout>
    );
};

export default Infopack;