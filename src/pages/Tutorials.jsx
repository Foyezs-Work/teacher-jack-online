
import React from 'react';
import { classData } from '../assets/datas/class';
import CoruseCard from '../components/coruse/CoruseCard';
import MainLayout from '../layouts/MainLayout';

const Tutorials = () => {

    return (
        <MainLayout>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        classData.length > 0 && classData.map((item, index) => (
                            <CoruseCard item={item} key={index + 9999} />
                        ))
                    }
                </div>
            </div>
        </MainLayout>
    );
};

export default Tutorials;