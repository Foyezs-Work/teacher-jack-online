import React from 'react';
import AboutTeacherJack from '../components/home/AboutTeacherJack';
import CourseProcessing from '../components/home/CourseProcessing';
import HomeBanner from '../components/home/HomeBanner';
import Testimonials from '../components/home/Testimonials';
import MainLayout from '../layouts/MainLayout';

const MainPage = () => {
    return (
        <MainLayout>
            <HomeBanner />
            <AboutTeacherJack />
            <CourseProcessing />
            <Testimonials />
        </MainLayout>
    );
};

export default MainPage;