import React from 'react';
import AboutTeacherJack from '../components/home/AboutTeacherJack';
import HomeBanner from '../components/home/HomeBanner';
import MainLayout from '../layouts/MainLayout';

const MainPage = () => {
    return (
        <MainLayout>
            <HomeBanner />
            <AboutTeacherJack />
        </MainLayout>
    );
};

export default MainPage;