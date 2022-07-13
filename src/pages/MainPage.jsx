import React from 'react';
import HomeBanner from '../components/home/HomeBanner';
import MainLayout from '../layouts/MainLayout';

const MainPage = () => {
    return (
        <MainLayout>
            <HomeBanner />
            <HomeBanner />
            <HomeBanner />
            <HomeBanner />
        </MainLayout>
    );
};

export default MainPage;