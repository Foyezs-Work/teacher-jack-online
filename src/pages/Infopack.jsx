import React, { useEffect } from 'react';
import CourseModule from '../components/package/CourseModule';
import FAQ from '../components/package/FAQ';
import NextBatch from '../components/package/NextBatch';
import OurPackageServices from '../components/package/OurPackageServices';
import PackageBanner from '../components/package/PackageBanner';
import StudentFeedback from '../components/package/StudentFeedback';
import MainLayout from '../layouts/MainLayout';

const Infopack = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout title="Package">
            <PackageBanner />
            <NextBatch/>
            <CourseModule/>
            <OurPackageServices/>
            <FAQ/>
            <StudentFeedback/>
        </MainLayout>
    );
};

export default Infopack;