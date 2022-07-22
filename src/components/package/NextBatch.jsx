import React from 'react';

const NextBatch = () => {
    return (
        <section class="notice pt-md-5 pt-lg-0">
            <div class="container">
                <div class="col-md-11 mx-auto bg-white notice-wrapper py-4 pb-3 py-sm-5 p-md-5 shadow ">
                    <h2 class="notice-title text-center">পরবর্তী ব্যাচের সময় সূচি</h2>
                    <div class="course-count-down mt-4 mb-3">
                        <div class="registration-will-start">
                            <div class="custom-countdown-component"></div>
                        </div>
                    </div>
                    <div class="row py-4 theme-notice-title">
                        <div class="col-lg-6">
                            <h5><i class="fas fa-calendar-week one"></i>এনরোলমেন্ট শুরু: <strong>ডিসেম্বর ১০, ২০২২ (শনিবার)</strong></h5>
                            <h5><i class="far fa-bookmark two"></i>এনরোলমেন্ট শেষ: <strong>ডিসেম্বর ২৪, ২০২২ (শনিবার)</strong></h5>
                        </div>
                        <div class="col-lg-6">
                            <h5><i class="far fa-bell three"></i>ব্যাচের ওরিয়েন্টশন: <strong>ডিসেম্বর ২৮, ২০২২ (বুধবার)</strong></h5>
                            <h5><i class="fas fa-tv four"></i>ক্লাস শুরু: <strong>ডিসেম্বর ৩০, ২০২২ (শুক্রবার )</strong></h5>
                        </div>
                    </div>
                    <div class="notice-dark-theme shadow d-lg-flex align-items-center text-center justify-content-lg-between pb-4 pb-lg-1 p-3 text-white rounded">
                        <h5 class="m-0 p-3 p-lg-0 pl-lg-4 text-center text-white">তুমি সপ্তম ব্যাচে এনরোল করতে আগ্রহি হলে, ওয়েবসাইটে রেজিস্ট্রেশন করে রাখো </h5>
                        <div class="easy-checkout-modal"></div>
                        <button class="btn francy-btn btn-danger">Enroll Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextBatch;